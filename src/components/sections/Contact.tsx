import GradientText from '@/components/typography/GradientText';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <section className="bg-light-contact-gradient dark:bg-dark-contact-gradient">
      <div className="pb-30 xl:gap-30 md:pb-50 container pt-12 md:grid md:grid-cols-[minmax(0,.9fr)_minmax(0,1fr)] md:gap-12 md:pt-21">
        <div className="mb-8 xs:mb-10">
          <h1 className="mb-2 font-display text-7 font-bold xs:mb-3 xs:text-9 xl:mb-4 xl:text-11">
            <GradientText>Let&apos;s get in touch.</GradientText>
          </h1>
          <p className="font-display text-4 text-primary-foreground xs:text-4.5 xl:text-5">
            Have a question, new opportunity, or just want to have a quick chat?
            Feel free to send me a message.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
