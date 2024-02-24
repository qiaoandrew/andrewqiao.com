interface InputFeedbackProps {
  children: React.ReactNode;
}

export default function InputFeedback({ children }: InputFeedbackProps) {
  return (
    <p className="mt-2.5 text-3.5 text-destructive-foreground">{children}</p>
  );
}
