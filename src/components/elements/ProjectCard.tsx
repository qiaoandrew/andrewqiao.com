import Image, { type StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import GradientText from '@/components/typography/GradientText';

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
    <GradientBorder borderRadius="rounded-[21px] xs:rounded-[25px] md:rounded-[21px] md:even:translate-y-9 xl:rounded-[25px]">
      <div className="relative aspect-[35/22] overflow-hidden rounded-5 bg-background xs:rounded-6 md:rounded-5 xl:rounded-6">
        <Image
          src={mockup}
          alt={`${title} mockup`}
          className="absolute right-[15%] top-1/2 w-[42%] -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-light-card-bottom-gradient dark:bg-dark-card-bottom-gradient" />
        <h3 className="absolute bottom-6 left-6 font-display text-6 font-bold xs:bottom-8 xs:left-8 xs:text-8 md:bottom-6 md:left-6 md:text-6 xl:bottom-8 xl:left-8 xl:text-8">
          <GradientText>{title}</GradientText>
        </h3>
        <GradientBorder borderRadius="rounded-full absolute right-4 top-4 xs:top-5 xs:right-5 md:top-4 md:right-4 xl:top-5 xl:right-5">
          <Badge className="font-display xs:px-3.5 xs:py-2 xs:text-3.5 md:px-3 md:py-1.5 md:text-3 xl:px-3.5 xl:py-2 xl:text-3.5">
            {type}
          </Badge>
        </GradientBorder>
      </div>
    </GradientBorder>
  );
}
