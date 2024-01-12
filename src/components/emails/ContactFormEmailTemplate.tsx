type ContactFormEmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactFormEmailTemplate({
  name,
  email,
  message,
}: ContactFormEmailTemplateProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
