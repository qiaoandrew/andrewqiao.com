import GradientText from '@/components/typography/GradientText';

export default function Contact() {
  return (
    <section className="bg-light-contact-gradient dark:bg-dark-contact-gradient">
      <div className="pb-30 container pt-12">
        <h1 className="mb-2 font-display text-7 font-bold">
          <GradientText>Let&apos;s get in touch.</GradientText>
        </h1>
        <p className="mb-8 font-display text-4 text-primary-foreground">
          Have a question, new opportunity, or just want to have a quick chat?
          Feel free to send me a message.
        </p>
      </div>
    </section>
  );
}
