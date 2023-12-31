type GradientTextProps = {
  children: React.ReactNode;
};

export default function GradientText({ children }: GradientTextProps) {
  return (
    <span className="inline-block dark:bg-dark-text-gradient bg-clip-text text-transparent">
      {children}
    </span>
  );
}
