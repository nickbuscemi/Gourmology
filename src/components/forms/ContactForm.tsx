// ContactForm.tsx
"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MyDateTimePicker } from "../ui/MyDateTimePicker";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  eventDate: z.date().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventDate: undefined,
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    console.log("values", values);
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          eventDate: values.eventDate ? values.eventDate.toISOString() : undefined, // Format date as YYYY-MM-DD
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact information:', error);
      alert('Error submitting contact information');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    form.reset();
  };

  const textClass = "bg-cream1 text-dark-1";

  return (
    <div className="font-garamond w-3/4 tracking-widest space-y-6">
      {isSubmitted ? (
        <div className="flex flex-col items-center space-y-6 py-44 text-3xl">
          <p className="text-center">We received your message. We will be reaching out to you shortly.</p>
          <Button onClick={handleReset} className="bg-cream1 tracking-widest items-center justify-center text-dark-2 rounded-sm">
            Send Another Message
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" className={textClass} {...field} />
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
                  <FormControl>
                    <Input placeholder="Enter your email" className={textClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" className={textClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventDate"
              render={() => (
                <FormItem className="flex-1">
                  <FormLabel>Do you have a date in mind?</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="eventDate"
                      render={({ field: { onChange, onBlur, value, name } }) => (
                        <MyDateTimePicker
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                        />
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you looking for?</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your message" className={textClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mb-6 md:mr-auto pt-4 md:pt-4 items-center flex justify-center">
              <Button variant="outline" className="bg-cream1 tracking-widest items-center justify-center text-dark-2 rounded-sm">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
