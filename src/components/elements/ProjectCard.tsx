import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import GradientText from '@/components/typography/GradientText';

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  href?: string;
  lightMockup: StaticImageData;
  darkMockup: StaticImageData;
}

export default function ProjectCard({
  id,
  title,
  type,
  href,
  lightMockup,
  darkMockup,
}: ProjectCardProps) {
  const cardContent = (
    <div className="group relative aspect-[35/22] overflow-hidden rounded-4 bg-background xs:rounded-5 md:rounded-4 xl:rounded-5">
      <Image
        src={lightMockup}
        alt={`${title} mockup`}
        className={cn(
          'absolute inset-0 transition-transform duration-200 md:group-hover:scale-105 dark:hidden'
        )}
      />
      <Image
        src={darkMockup}
        alt={`${title} mockup`}
        className={cn(
          'absolute inset-0 hidden transition-transform duration-200 md:group-hover:scale-105 dark:block'
        )}
      />
      <div className="absolute inset-0 bg-light-card-bottom-gradient dark:bg-dark-card-bottom-gradient" />
      <h3
        className={cn(
          'absolute bottom-6 left-6 font-display text-6 font-bold',
          'xs:bottom-8 xs:left-8 xs:text-8',
          'md:bottom-6 md:left-6 md:text-6',
          'xl:bottom-8 xl:left-8 xl:text-8'
        )}
      >
        <GradientText>{title}</GradientText>
      </h3>
      <GradientBorder
        borderRadius={cn(
          'rounded-full absolute right-4 top-4',
          'xs:top-5 xs:right-5',
          'md:top-4 md:right-4',
          'xl:top-5 xl:right-5'
        )}
      >
        <Badge
          className={cn(
            'font-display',
            'xs:px-3.5 xs:py-2 xs:text-3.5',
            'md:px-3 md:py-1.5 md:text-3',
            'xl:text-3.5'
          )}
        >
          {type}
        </Badge>
      </GradientBorder>
    </div>
  );

  return (
    <GradientBorder
      borderRadius={cn(
        'transition-shadow duration-200 rounded-[15px] shadow-card-light dark:shadow-card-dark hover:shadow-card-md-light dark:hover:shadow-card-md-dark',
        'xs:rounded-[21px]',
        'md:rounded-[15px] md:odd:translate-y-9',
        'xl:rounded-[21px]'
      )}
    >
      {href ? (
        href.startsWith('/') ? (
          <Link href={href}>{cardContent}</Link>
        ) : (
          <a href={href} target="_blank" rel="noreferrer noopener">
            {cardContent}
          </a>
        )
      ) : (
        <div className="md:hover:cursor-wait">{cardContent}</div>
      )}
    </GradientBorder>
  );
}
