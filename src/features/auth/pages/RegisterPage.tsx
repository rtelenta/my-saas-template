"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const registerSchema = z.object({
  email: z.string().min(6).email(),
  password: z.string().min(6),
})

type FormValues = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  })

  const onSubmit = form.handleSubmit((values) => {
    console.log(values)
  })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Register</Button>
            </form>
          </Form>

          <div className="text-center mt-6 text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link href="/login">
              <span className="inline-block hover:text-foreground hover:underline hover:cursor-pointer transition duration-200">
                Login
              </span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
