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
    <div>
      <div className="mb-1 flex justify-between">
        <h3 className="text-5.5 line-clamp-1 flex-shrink font-display font-bold">
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
      <p className="mb-4 font-display text-3.5 text-foreground">{role}</p>
      <div className="mb-4 flex gap-4">
        {[date, location].map((item) => (
          <GradientBorder borderRadius="rounded-full" key={item}>
            <Badge className="font-display">{item}</Badge>
          </GradientBorder>
        ))}
      </div>
      <ul className="flex list-disc flex-col gap-1 pl-3">
        {points.map((point, i) => (
          <li
            key={`point-${i}`}
            className="text-3.5 text-primary-foreground"
            dangerouslySetInnerHTML={{ __html: point }}
          />
        ))}
      </ul>
    </div>
  );
}
