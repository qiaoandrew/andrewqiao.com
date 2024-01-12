type InputFeedbackProps = {
  children: React.ReactNode;
};

export default function InputFeedback({ children }: InputFeedbackProps) {
  return <p className="text-destructive-foreground mt-3 text-4">{children}</p>;
}
