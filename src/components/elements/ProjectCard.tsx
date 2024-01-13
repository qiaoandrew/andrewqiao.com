import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import GradientText from '@/components/typography/GradientText';

const projectCardImageVariants = cva('absolute', {
  variants: {
    variant: {
      remax: '',
      'quadratic-ui': 'absolute inset-0',
      pethsapp: 'right-[15%] top-1/2 w-[42%] -translate-y-1/2',
      uwdsc: '',
    },
  },
});

type ProjectCardProps = {
  id: string;
  title: string;
  type: string;
  href?: string;
  lightMockup: StaticImageData;
  darkMockup: StaticImageData;
  imageVariant: 'remax' | 'quadratic-ui' | 'pethsapp' | 'uwdsc';
};

export default function ProjectCard({
  id,
  title,
  type,
  href,
  lightMockup,
  darkMockup,
  imageVariant,
}: ProjectCardProps) {
  const cardContent = (
    <div className="relative aspect-[35/22] overflow-hidden rounded-5 bg-background xs:rounded-6 md:rounded-5 xl:rounded-6">
      <Image
        src={lightMockup}
        alt={`${title} mockup`}
        className={cn(
          'dark:hidden',
          projectCardImageVariants({ variant: imageVariant })
        )}
      />
      <Image
        src={darkMockup}
        alt={`${title} mockup`}
        className={cn(
          'hidden dark:block',
          projectCardImageVariants({ variant: imageVariant })
        )}
      />
      <div className="absolute inset-0 bg-light-card-bottom-gradient dark:bg-dark-card-bottom-gradient" />
      <h3 className="absolute bottom-6 left-6 font-display text-6 font-bold xs:bottom-8 xs:left-8 xs:text-8 md:bottom-6 md:left-6 md:text-6 xl:bottom-8 xl:left-8 xl:text-8">
        <GradientText>{title}</GradientText>
      </h3>
      <GradientBorder borderRadius="rounded-full absolute right-4 top-4 xs:top-5 xs:right-5 md:top-4 md:right-4 xl:top-5 xl:right-5">
        <Badge className="font-display xs:px-3.5 xs:py-2 xs:text-3.5 md:px-3 md:py-1.5 md:text-3 xl:text-3.5">
          {type}
        </Badge>
      </GradientBorder>
    </div>
  );

  return (
    <GradientBorder borderRadius="transition-shadow duration-200 rounded-[21px] xs:rounded-[25px] md:rounded-[21px] xl:rounded-[25px] shadow-card-light dark:shadow-card-dark md:odd:translate-y-9 hover:shadow-card-md-light dark:hover:shadow-card-md-dark">
      {href ? (
        <Link href={`/projects/${id}`}>{cardContent}</Link>
      ) : (
        <div className="hover:cursor-wait">{cardContent}</div>
      )}
    </GradientBorder>
  );
}
