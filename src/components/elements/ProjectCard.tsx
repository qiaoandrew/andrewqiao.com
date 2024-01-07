import type { StaticImageData } from 'next/image';
import GradientBorder from '../ui/GradientBorder';
import GradientText from '../typography/GradientText';
import { Badge } from '../ui/Badge';
import Image from 'next/image';

type ProjectCardProps = {
  id: string;
  title: string;
  type: string;
  mockup: StaticImageData;
};

export default function ProjectCard({
  id,
  title,
  type,
  mockup,
}: ProjectCardProps) {
  return (
    <GradientBorder borderRadius="rounded-[21px] md:even:translate-y-9">
      <div className="relative aspect-[35/22] overflow-hidden rounded-5 bg-background">
        <Image
          src={mockup}
          alt={`${title} mockup`}
          className="absolute right-[15%] top-1/2 w-[42%] -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-light-card-bottom-gradient dark:bg-dark-card-bottom-gradient" />
        <h3 className="absolute bottom-6 left-6 font-display text-6 font-bold">
          <GradientText>{title}</GradientText>
        </h3>
        <GradientBorder borderRadius="rounded-full absolute right-4 top-4">
          <Badge className="font-display">{type}</Badge>
        </GradientBorder>
      </div>
    </GradientBorder>
  );
}
