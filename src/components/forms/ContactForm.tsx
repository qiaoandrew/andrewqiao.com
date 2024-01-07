'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Form, FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import GradientBorder from '@/components/ui/GradientBorder';
import { Textarea } from '@/components/ui/Textarea';

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-5">
              <GradientBorder borderRadius="rounded-[11px]">
                <Input type="text" placeholder="Name" {...field} />
              </GradientBorder>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5">
              <GradientBorder borderRadius="rounded-[11px]">
                <Input type="email" placeholder="Email" {...field} />
              </GradientBorder>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-12">
              <GradientBorder borderRadius="rounded-[11px]">
                <Textarea
                  placeholder="Message"
                  {...field}
                  className="h-[160px]"
                />
              </GradientBorder>
            </FormItem>
          )}
        />
        <GradientBorder borderRadius="rounded-[11px]">
          <Button type="submit" size="sm" className="w-full">
            Submit
          </Button>
        </GradientBorder>
      </form>
    </Form>
  );
}
