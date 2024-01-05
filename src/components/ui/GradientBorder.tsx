import { cn } from "@/lib/utils";

type GradientBorderProps = {
  borderRadius: string;
  children: React.ReactNode;
};

export default function GradientBorder({
  borderRadius,
  children,
}: GradientBorderProps) {
  return <div className="bg-dark-border-gradient p-px"></div>;
}
