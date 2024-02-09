import * as React from 'react'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Button from '@/components/Button/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './../ui/form'
import { Input } from './../ui/input'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  who_told_you: z.string().min(2).max(50),
  what_you_bring_to_table: z.string().min(2).max(50),
})

export function SignUpForm() {
  const [loading, setLoading] = React.useState(false)
  const [state, setState] = React.useState('EMPTY')
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      who_told_you: '',
      what_you_bring_to_table: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    try {
      let res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/register_visitor',
        {
          method: 'POST',
          body: JSON.stringify(values),
        }
      )
      const data = await res.json()
      setLoading(false)
      if (res.status === 200) {
        setState('success')
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
      setState('unsuccessful')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 md:space-y-8 font-medium"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your name?</FormLabel>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormControl>
                <Input placeholder="john doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormDescription>We promise never to spam you.</FormDescription>
              <FormControl>
                <Input placeholder="janedoe@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="who_told_you"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who told you about Ibadan Techies?</FormLabel>
              <FormDescription>
                The community is heavy on village experience so we will
                appreciate it even more if you were invited by an insider.
              </FormDescription>
              <FormControl>
                <Input placeholder="the name..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="what_you_bring_to_table"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you bring to the table?</FormLabel>
              <FormDescription>
                Let us know what your capitavating presence will mean to us.
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="passionate about photography..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {state === 'success' ? (
          <p>Thank you!! We've successfully received your info</p>
        ) : (
          <Button
            style={{
              background: 'bg-black',
              color: 'text-white',
              fontSize: 'text-sm',
              hoverBg: 'hover:bg-ibtc-black/70',
            }}
            type="submit"
          >
            {loading ? `...sending resourses` : ' Submit'}
          </Button>
        )}
        {state === 'unsuccessful' && (
          <p className="text-red-600">
            we encountered an internal error...try again
          </p>
        )}
      </form>
    </Form>
  )
}
