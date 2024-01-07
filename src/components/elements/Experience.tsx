import Image, { type StaticImageData } from 'next/image';

import { Badge } from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import GradientText from '@/components/typography/GradientText';

type ExperienceProps = {
  company: string;
  role: string;
  date: string;
  location: string;
  points: string[];
  icon: StaticImageData;
};

export default function Experience({
  company,
  role,
  date,
  location,
  points,
  icon,
}: ExperienceProps) {
  return (
    <div className="md:flex md:justify-between md:gap-7">
      <div className="hidden md:block">
        <p className="leading-11 font-display text-5 font-medium text-foreground">
          {date}
        </p>
        <p className="font-display text-primary-foreground">{location}</p>
      </div>
      <hr className="md:my-5.5 hidden md:block md:flex-grow md:text-ring" />
      <div className="md:w-[420px] lg:w-[516px]">
        <div className="mb-1 flex items-center justify-between xs:mb-0.5">
          <h3 className="text-5.5 line-clamp-1 flex-shrink font-display font-bold xs:text-7">
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
      </div>
    </div>
  );
}
