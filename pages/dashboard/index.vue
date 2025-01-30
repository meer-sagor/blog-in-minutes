<script setup lang="ts">
import type {
  ColumnFiltersState,
  ExpandedState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import {truncateString} from "~/utils";

const supabase = useSupabaseClient()


export interface Payment {
  id: string
  title: string
  event_type: string
  action?: any
}

const {data:articles, error, pending} = await useAsyncData('articles', async()=>{
  const {data} = await supabase.from('articles').select()
  return data
})

const columnHelper = createColumnHelper<any>()

const columns = [
  columnHelper.accessor('title', {
    enablePinning: true,
    header: 'Title',
    cell: ({ row }) => h('div', { class: 'capitalize' }, truncateString({str: row.getValue('title'), maxLength: 50})),
  }),
  columnHelper.accessor('event_type', {
    header: 'Type',
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('event_type')),
  }),
  // columnHelper.accessor('action', {
  //   cell: ({ row }) => h('div', { class: 'lowercase' }),
  // }),
  // columnHelper.display({
  //   id: 'actions',
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     return h('div', { class: 'relative' }, 'hellow')
  //   },
  // }),
]

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})
const table = useVueTable({
  data: articles.value ?? [],
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
    get expanded() { return expanded.value },
    columnPinning: {
      left: ['status'],
    },
  },
})
</script>

<template>
  <div class="w-full">
    <div class="flex gap-2 items-center py-4 justify-between">
      <Input
          class="max-w-sm"
          placeholder="Filter article..."
          :model-value="table.getColumn('title')?.getFilterValue() as string"
          @update:model-value=" table.getColumn('title')?.setFilterValue($event)"
      />
      <NuxtLink to="/dashboard/article/create">
        <Button>Create</Button>
      </NuxtLink>
    </div>
    <div class="rounded-md border">
      <div v-if="pending" class="space-y-2 w-full">
        <Skeleton class="h-space40" v-for="loader in 10" :key="loader"/>
      </div>
      <Table v-else>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead
                v-for="header in headerGroup.headers" :key="header.id" :data-pinned="header.column.getIsPinned()"
                :class="cn(
                { 'sticky bg-background/95': header.column.getIsPinned() },
                header.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
              )"
            >
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow :data-state="row.getIsSelected() && 'selected'">
                <TableCell
                    v-for="cell in row.getVisibleCells()" :key="cell.id" :data-pinned="cell.column.getIsPinned()"
                    :class="cn(
                    { 'sticky bg-background/95': cell.column.getIsPinned() },
                    cell.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
                  )"
                >
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TableCell>
              </TableRow>
              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ row.original }}
                </TableCell>
              </TableRow>
            </template>
          </template>

          <TableRow v-else>
            <TableCell
                :colspan="columns.length"
                class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

<!--    <div class="flex items-center justify-end space-x-2 py-4">-->
<!--      <div class="flex-1 text-sm text-muted-foreground">-->
<!--        {{ table.getFilteredSelectedRowModel().rows.length }} of-->
<!--        {{ table.getFilteredRowModel().rows.length }} row(s) selected.-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>