import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LuSend } from "react-icons/lu";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CardWrapper from "../common/CardWrapper";
import { cn } from "@/common/lib/utils";
import { Textarea } from "../ui/textarea";
import Heading from "../common/Heading";
import { CustomButtonWrapper } from "../common/CustomButtons";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z
    .string()
    .min(3, { message: "Subject should contain atleast 3 letters" }),
  message: z
    .string()
    .min(3, { message: "Message should contain atleast 3 letters" }),
});

type ContactUsFormPros = {
  className?: string;
};

export function ContactUsForm({ className }: ContactUsFormPros) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <CardWrapper
      className={cn(
        "border-[1px] shadow-sm hover:shadow-md  mx-auto max-w-6xl w-full bg-cream-50 lg:py-9 sm:py-8 py-8 lg:px-7 sm:px-5 px-4",
        className
      )}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-8 space-y-5 w-full text-gray-700"
        >
          <Heading className="text-center md:text-2xl sm:text-2xl text-xl font-semibold ">
            Send Us a Message
          </Heading>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jane Doe"
                      {...field}
                      className="flex h-10 w-full rounded-md border bg-cream-100 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-gray-200 focus-visible:ring-gold-200/50 "
                    />
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
                    <Input
                      placeholder="Jane@example.com"
                      {...field}
                      className="flex h-10 w-full rounded-md border bg-cream-100 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-gray-200 focus-visible:ring-gold-200/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="How can we help you?"
                    {...field}
                    className="flex h-10 w-full rounded-md border bg-cream-100 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-gray-200 focus-visible:ring-gold-200/50"
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your wedding plans or questions..."
                    className="flex w-full rounded-md border bg-cream-100 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-gray-200 focus-visible:ring-gold-300/50 resize-none min-h-44"
                    {...field}
                    rows={7}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <CustomButtonWrapper
            type="submit"
            className="flex items-center gap-x-2   bg-gradient-to-tr from-gold-400 font-medium text-white to-gold hover:to-gold-600 hover:from-gold duration-300  md:px-6 md:py-2 transition-all w-full justify-center hover:text-white/80"
          >
            <LuSend />
            Send Message
          </CustomButtonWrapper>
        </form>
      </Form>
    </CardWrapper>
  );
}
