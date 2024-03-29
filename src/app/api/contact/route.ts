import { resend } from '@/lib/resend';

import ContactFormEmailTemplate from '@/components/emails/ContactFormEmailTemplate';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Personal Website <hello@andrewqiao.com>',
      to: ['andrewqiao2004@gmail.com'],
      subject: 'New Contact Form Submission',
      react: ContactFormEmailTemplate({ name, email, message }),
    });

    if (error) {
      throw new Error(error.message);
    }

    return Response.json(data);
  } catch (error: any) {
    console.error(error);

    return Response.json({ error });
  }
}
