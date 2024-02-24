interface GradientTextProps {
  children: React.ReactNode;
}

export default function GradientText({ children }: GradientTextProps) {
  return (
    <span className="inline-block bg-light-text-gradient bg-clip-text text-transparent dark:bg-dark-text-gradient">
      {children}
    </span>
  );
}
