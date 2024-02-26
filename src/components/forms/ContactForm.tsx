'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Form, FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import GradientBorder from '@/components/ui/GradientBorder';
import InputFeedback from '@/components/ui/InputFeedback';

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

      form.reset();
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    }
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
              {form.formState.errors.name && (
                <InputFeedback>
                  {form.formState.errors.name.message}
                </InputFeedback>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5 xs:mb-6">
              <Input type="email" placeholder="Email" {...field} />
              {form.formState.errors.email && (
                <InputFeedback>
                  {form.formState.errors.email.message}
                </InputFeedback>
              )}
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
              {form.formState.errors.message && (
                <InputFeedback>
                  {form.formState.errors.message.message}
                </InputFeedback>
              )}
            </FormItem>
          )}
        />
        <GradientBorder borderRadius="rounded-[11px] xs:rounded-[13px] xs:inline-flex">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full disabled:opacity-100 xs:rounded-3 xs:px-6 xs:py-3 xs:text-4.5"
          >
            <span
              className={cn(form.formState.isSubmitting && 'text-transparent')}
            >
              Submit
            </span>
            <Loader2Icon
              size={20}
              strokeWidth="2.4"
              className={cn(
                'absolute hidden animate-spin',
                form.formState.isSubmitting && 'block'
              )}
            />
          </Button>
        </GradientBorder>
      </form>
    </Form>
  );
}
