type GradientTextProps = {
  children: React.ReactNode;
};

export default function GradientText({ children }: GradientTextProps) {
  return (
    <span className="bg-light-text-gradient inline-block bg-clip-text text-transparent dark:bg-dark-text-gradient">
      {children}
    </span>
  );
}
