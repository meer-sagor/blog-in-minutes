<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import {toast} from "~/components/ui/toast";

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const haveAccount = ref(true)

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(6)
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const action = haveAccount.value ? 'signInWithPassword' : 'signUp';
  const { data, error } = await supabase.auth[action]({
    email: values.email,
    password: values.password,
  });

  if (data) return navigateTo('/dashboard');

  toast({
    title: error?.message ?? 'Failed',
    description: h(
        'pre',
        { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
        h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    ),
  });
});
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
      <Button type="submit">
        Submit
      </Button>
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