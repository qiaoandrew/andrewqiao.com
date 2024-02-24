import Image, { type StaticImageData } from 'next/image';

import GradientText from '@/components/typography/GradientText';

interface ProjectIntroductionProps {
  title: string;
  type: string;
  description: string;
  mockupLight: StaticImageData;
  mockupDark: StaticImageData;
}

export default function ProjectIntroduction({
  title,
  type,
  description,
  mockupLight,
  mockupDark,
}: ProjectIntroductionProps) {
  return (
    <section className="mb-7 pt-21 sm:pt-24 md:mb-10 md:pt-32 xl:mb-16 2xl:pt-36">
      <div className="mb-8 flex justify-between md:mb-12 xl:mb-18">
        <div className="flex-shrink-0">
          <h1 className="mb-3 font-display text-10 font-bold xl:mb-4 xl:text-16">
            <GradientText>{title}</GradientText>
          </h1>
          <p className="text-4 font-medium text-primary-foreground xl:text-5">
            {type}
          </p>
        </div>
        <p className="mt-1 hidden max-w-[380px] font-display text-4.5 font-medium text-foreground md:block xl:mt-4 xl:max-w-[550px] xl:text-6">
          {description}
        </p>
      </div>
      <div className="group mb-9 aspect-square overflow-hidden border border-ring sm:aspect-[1080/600]">
        <Image
          src={mockupLight}
          alt={title}
          className="h-full object-cover transition-transform duration-200 md:group-hover:scale-105 dark:hidden"
        />
        <Image
          src={mockupDark}
          alt={title}
          className="hidden h-full object-cover transition-transform duration-200 md:group-hover:scale-105 dark:block"
        />
      </div>
      <p className="max-w-[400px] font-display text-4.5 font-medium text-foreground md:hidden">
        {description}
      </p>
    </section>
  );
}
