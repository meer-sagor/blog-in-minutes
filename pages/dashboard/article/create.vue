<script setup lang="ts">
import {useForm} from "vee-validate";
const supabase = useSupabaseClient()

const { handleSubmit, setFieldValue } = useForm()


const fileUploadHandler = async (file:File)=>{
  const {data, error} = await supabase.storage.from('events').upload(file.name, file)
  if(data){
    const { data: publicUrl } = supabase
        .storage
        .from('events')
        .getPublicUrl(data?.path)
    return publicUrl
  }
  if(error){
    throw Error(error.message)
  }
}

const file = ref<File | null>(null);

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files?.length) {
    file.value = target.files[0];
    setFieldValue('media', file.value); // Update form value manually
  }
};

const onSubmit = handleSubmit(async (values) => {
  console.log('values=========', values)

  if(!(values.media instanceof File)){
    return
  }

  const path = await fileUploadHandler(values.media)
  const {data, error} = await supabase.from('articles').insert({title: values.title, description: values.description, event_type: values.type, media: path?.publicUrl ?? null})
  if(data){
    navigateTo('/dashboard')
  }

});


</script>

<template>
  <section class="space-y-6">
    <NuxtLink to="/dashboard" class="inline-flex items-center gap-space12 hover:bg-gray-200 p-space8 rounded-md">
      <Icon name="lucide:arrow-left"/>
      Back
    </NuxtLink>
    <form class="space-y-6 w-full" @submit.prevent="onSubmit">
      <div>
        <Label for="media">Upload Media</Label>
        <Input id="media" type="file" @change="onFileChange"/>
      </div>

      <FormField v-slot="{ componentField }" name="type">
        <FormItem>
          <FormLabel>Type</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Type" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input type="text" placeholder="title" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>



      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea placeholder="Type your message here." v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>



      <Button type="submit">
        Create Article
      </Button>
    </form>
  </section>
</template>

<style scoped>

</style>