
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define your schema using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Invalid email address" }),
  eventDate: z.string().min(1, { message: "Please enter a date for your event" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

// Define the form component
const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      eventDate: '',
      message: ''
    }
  });

  const onSubmit = (values: any) => {
    console.log(values);
    // Here you would typically handle the form submission, like sending to an API.
  };

  return (
    <div className="w-full px-4 pb-24 pt-0 flex flex-col items-center justify-center">
      <div className="mt-10 lg:mt-0 font-garamond tracking-widest">
        <h2 className="mb-5 text-3xl text-center font-bold text-cream1 sm:text-[40px]/[48px]">
          Start Planning Your Unforgettable Event Today!
        </h2>
        <p className="mb-5 text-base text-center text-body-color dark:text-dark-6">
          Please use the form below to reach out to us and we will be in touch. We can't wait to hear from you!
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" type="text" {...form.register("name")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <p className="mt-2 text-sm text-red-600">{form.formState.errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" {...form.register("email")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <p className="mt-2 text-sm text-red-600">{form.formState.errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
            <input id="eventDate" type="text" {...form.register("eventDate")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <p className="mt-2 text-sm text-red-600">{form.formState.errors.eventDate?.message}</p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" {...form.register("message")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
            <p className="mt-2 text-sm text-red-600">{form.formState.errors.message?.message}</p>
          </div>

          <div>
            <button type="submit" className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm
