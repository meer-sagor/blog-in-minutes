<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const haveAccount = ref(true)
const processing = ref(false)

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(6)
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const action = haveAccount.value ? 'signInWithPassword' : 'signUp';
  processing.value = true
  const { data, error } = await supabase.auth[action]({
    email: values.email,
    password: values.password,
  });

  if (data) {
    processing.value = false
    navigateTo('/dashboard');
  }
  if (error) {
    processing.value = false
  }
});

useSeoMeta({
  title: 'Login',
})
</script>

<template>
  <Card class="w-[320px] md:w-[500px] grid place-items-center m-auto border rounded-md p-space16">
    <h3 class="text-[24px] font-bold leading-[33.6px]">
      {{haveAccount ? 'Login' : 'SignUp'}}
    </h3>
    <form class="space-y-6 w-full" @submit.prevent="onSubmit">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Email" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="flex items-center justify-center w-full">
        <Button type="submit" :disabled="processing" class="text-center">
          <Icon v-if="processing" name="lucide:loader-circle" class="animate-spin"/>
          Submit
        </Button>
      </div>

    </form>
    <p class="text-sm" @click="haveAccount = !haveAccount">
      {{!haveAccount ? "have an account " : "Don't have an account"}}
      <span class="underline cursor-pointer">
      {{!haveAccount ? 'Login' : 'SignUp'}}
    </span> </p>

  </Card>
</template>

<style scoped>

</style>