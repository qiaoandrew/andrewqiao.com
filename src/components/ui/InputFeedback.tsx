type InputFeedbackProps = {
  children: React.ReactNode;
};

export default function InputFeedback({ children }: InputFeedbackProps) {
  return (
    <p className="text-destructive-foreground mt-2.5 text-3.5">{children}</p>
  );
}
