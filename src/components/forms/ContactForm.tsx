'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Form, FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import GradientBorder from '@/components/ui/GradientBorder';

const formSchema = z.object({
  name: z.string().min(1, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(1, 'Please enter a message.'),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
      }
    } catch (error) {}
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-5 xs:mb-6">
              <Input type="text" placeholder="Name" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5 xs:mb-6">
              <Input type="email" placeholder="Email" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-12 xs:mb-16">
              <Textarea
                placeholder="Message"
                {...field}
                className="h-[160px] xs:h-[200px]"
              />
            </FormItem>
          )}
        />
        <GradientBorder borderRadius="rounded-[11px] xs:inline-flex xs:rounded-[13px]">
          <Button
            type="submit"
            size="sm"
            className="w-full xs:w-[110px] xs:rounded-3 xs:py-3 xs:text-4.5"
          >
            Submit
          </Button>
        </GradientBorder>
      </form>
    </Form>
  );
}
