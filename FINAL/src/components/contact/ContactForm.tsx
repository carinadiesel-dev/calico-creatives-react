"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

export const contactSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  message: z.string(),
  // .length(5, { message: "Message must be at least 100 characters long" }),
});

// Function when submitting - async
// Wait for function to complete. If okay ? success : error handling

const handleSubmit = async (data) => {
  const response = await fetch(`https://api.scryfasdwall.com/cards/random`);
  if (!response.ok) {
    alert("This wasn't ok");
  }

  const parsedResponse = await response.json();
  // Success State
  // If success state,show the sucess message,else show form

  console.log(parsedResponse);
};

export function ContactForm() {
  //  // 1. Define your form.
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    handleSubmit(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 px-12 py-20 border-2 border-transparent rounded-3xl bg-calicoPink-400"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-start">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-start">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-start">Email</FormLabel>
              <FormControl>
                <Input placeholder="email@website.com" {...field} />
              </FormControl>
              <FormDescription>
                This is the email address we will use to contact you
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-start">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full translate-y-5">
          <button className="flex items-center justify-center w-full py-5 font-sans text-xl font-bold text-white border-4 rounded-full bg-calicoPink-400 hover:text-calicoPink-400 hover:bg-white">
            Submit
          </button>
        </div>
      </form>
    </Form>
  );
}
