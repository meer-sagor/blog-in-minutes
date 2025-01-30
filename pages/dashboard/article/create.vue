<script setup lang="ts">
import {useForm} from "vee-validate";
const supabase = useSupabaseClient()

const { handleSubmit, setFieldValue } = useForm()
const processing = ref(false)
const errorMessage = ref('')

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
    errorMessage.value = error.message
    processing.value = false
    throw Error(error.message)
  }
}

const file = ref<File | null>(null);
const imageUrl = ref<string | null>(null);

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files?.length) {
    file.value = target.files[0];
    imageUrl.value = URL.createObjectURL(file.value);
    setFieldValue('media', file.value); // Update form value manually
  }
};
const fileRemoveHandler = ()=>{
  imageUrl.value = null
  file.value = null
  setFieldValue('media', null);
  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
  }
}

const onSubmit = handleSubmit(async (values) => {
  if(!(values.media instanceof File)){
    return
  }
  processing.value = true
  const path = await fileUploadHandler(values.media)
  const {data, error} = await supabase.from('articles').insert({title: values.title, description: values.description, event_type: values.type, media: path?.publicUrl ?? null}).select()
  if(data){
    processing.value = false
    errorMessage.value = ''
    navigateTo('/dashboard')
  }
  if(error){
    errorMessage.value = error.message
    processing.value = false
  }

});

useSeoMeta({
  title: 'article | Create'
})

</script>

<template>
  <section class="space-y-6 sm:w-[500px] m-auto">
    <NuxtLink to="/dashboard" class="inline-flex items-center gap-space12 hover:bg-gray-200 p-space8 rounded-md">
      <Icon name="lucide:arrow-left"/>
      Back
    </NuxtLink>
    <form class="space-y-6 w-full" @submit.prevent="onSubmit">
      <div class="">
        <div v-if="imageUrl" class="w-[200px] h-[100px] relative">
          <NuxtImg  :src="imageUrl" alt="image preview" class="border w-full h-[100px] rounded-md object-cover" />
          <div class="absolute top-space5 right-space5 flex justify-center items-center size-space28 bg-red-400 hover:bg-red-500 rounded-full cursor-pointer" @click="fileRemoveHandler">
            <Icon name="lucide:trash-2" class="text-white cursor-pointer" />
          </div>
        </div>


        <Label v-else for="media" class="flex justify-center items-center w-[200px] h-[100px] border border-dashed rounded-md bg-gray-100 cursor-pointer">Upload Media</Label>
        <Input id="media" type="file" @change="onFileChange" class="hidden"/>

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


      <Label v-if="errorMessage" class="text-red-400 block">{{errorMessage}}</Label>

      <Button type="submit" :disabled="processing">
        <Icon v-if="processing" name="lucide:loader-circle" class="animate-spin"/>
        Create Article
      </Button>
    </form>
  </section>
</template>

<style scoped>

</style>