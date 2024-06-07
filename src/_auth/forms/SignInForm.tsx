"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import Loader from "@/components/ui/loader"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { supabase } from "../../supabaseClient"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const SignInForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      return toast({
        title: "Sign in failed. Please try again.",
      })
    }

    navigate('/dash-main')
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="https://akqmdqkuzjliggqqmlaj.supabase.co/storage/v1/object/public/Gourmology/logos/site-logo-words-white.png" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm-pt-12">Log in to your dashboard.</h2>
        <p className="text-light-3 small-medium md:base-regular">Welcome back! Please enter your details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input text-dark-1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input text-dark-1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {form.formState.isSubmitting ? (
              <div className="flex-center gap-2">
                <Loader /> Signing you in...
              </div>
            ) : "Sign In"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            New Admin? <Link to="/sign-up" className="text-primary text-primary-500 text-small-semibold ml-1">Create Profile</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignInForm
