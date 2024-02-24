import Image, { type StaticImageData } from 'next/image';

import { Badge } from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import GradientText from '@/components/typography/GradientText';

interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  location: string;
  points: string[];
  icon: StaticImageData;
  buttons: React.ReactNode[];
}

export default function ExperienceItem({
  company,
  role,
  date,
  location,
  points,
  icon,
  buttons,
}: ExperienceItemProps) {
  return (
    <div className="md:flex md:justify-between md:gap-7">
      <div className="hidden md:block">
        <p className="font-display text-5 font-medium leading-11 text-foreground">
          {date}
        </p>
        <p className="font-display text-primary-foreground">{location}</p>
      </div>
      <hr className="hidden md:my-5.5 md:block md:flex-grow md:text-ring" />
      <div className="md:w-[420px] lg:w-[516px]">
        <div className="mb-1 flex items-center justify-between xs:mb-0.5">
          <h3 className="line-clamp-1 flex-shrink font-display text-5.5 font-bold xs:text-7">
            <GradientText>{company}</GradientText>
          </h3>
          <Image
            src={icon}
            alt={`${company} logo`}
            width={36}
            height={36}
            className="size-9 flex-shrink-0 rounded-2"
          />
        </div>
        <p className="mb-4 font-display text-3.5 text-foreground xs:text-4.5">
          {role}
        </p>
        <div className="mb-4 flex gap-4 md:hidden">
          {[date, location].map((item) => (
            <GradientBorder borderRadius="rounded-full" key={item}>
              <Badge className="font-display xs:text-3.5">{item}</Badge>
            </GradientBorder>
          ))}
        </div>
        <ul className="flex list-disc flex-col gap-1 pl-3 xs:gap-1.5">
          {points.map((point, i) => (
            <li
              key={`point-${i}`}
              className="text-3.5 text-primary-foreground xs:text-4"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          ))}
        </ul>
        {buttons.length > 0 && (
          <div className="mt-8 flex flex-col gap-5 xs:flex-row md:mt-10 md:flex-col lg:flex-row">
            {buttons}
          </div>
        )}
      </div>
    </div>
  );
}
