import { resend } from '@/lib/resend';

import ContactEmailTemplate from '@/components/emails/ContactEmailTemplate';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const data = await resend.emails.send({
      from: 'Personal Website <hello@andrewqiao.com>',
      to: ['andrewqiao2004@gmail.com'],
      subject: 'New Contact Form Submission',
      react: ContactEmailTemplate({ name, email, message }),
    });

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error });
  }
}
