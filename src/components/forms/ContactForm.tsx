"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { DatePicker } from "@/components/ui/datePicker";

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  eventDate: z.date({ message: "Please select a date" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventDate: new Date(),
      message: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const textClass = "bg-cream1 text-dark-1"

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-garamond w-3/4 tracking-widest space-y-6">
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
              <FormItem>
                <FormLabel>Possible Date of Event</FormLabel>
                <FormControl>
                  <DatePicker />
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
                <Input placeholder="Enter your message" className={`${textClass}`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mb-6 md:mr-auto font-garamond pt-4 md:pt-4 items-center flex justify-center">
            <Button variant="outline" className="bg-cream1 tracking-widest items-center justify-center text-dark-2 rounded-sm">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
