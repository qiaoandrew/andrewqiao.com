import type { Button as ButtonType } from '@/types/types';
import { Button } from '@/components/ui/Button';
import GradientText from '@/components/typography/GradientText';
import GradientBorder from '@/components/ui/GradientBorder';

interface ProjectDetailsProps {
  technologies: string[];
  skills: string[];
  buttons: ButtonType[];
}

export default function ProjectDetails({
  technologies,
  skills,
  buttons,
}: ProjectDetailsProps) {
  return (
    <div className="flex-shrink-0 md:w-[300px]">
      <div className="mb-6">
        <h3 className="relative mb-0.5 font-display text-4.5 font-bold xl:text-5">
          <GradientText>Technologies</GradientText>
          <div className="absolute -left-5 top-1/2 hidden h-5 w-0.5 -translate-y-1/2 bg-muted-foreground 2xl:block" />
        </h3>
        <p className="text-4 text-foreground">
          {technologies.map((technology, index) => (
            <span key={technology}>
              {technology}
              {index !== technologies.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
      <div className="mb-12">
        <h3 className="relative mb-0.5 font-display text-4.5 font-bold xl:text-5">
          <GradientText>Skills</GradientText>
          <div className="absolute -left-5 top-1/2 hidden h-5 w-0.5 -translate-y-1/2 bg-muted-foreground 2xl:block" />
        </h3>
        <p className="text-4 text-foreground">
          {skills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index !== skills.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
      <div className="grid gap-4">
        {buttons.map(({ id, title, href, Icon }) => (
          <GradientBorder borderRadius="rounded-[13px]" key={id}>
            <Button asChild className="w-full py-2.5">
              <a href={href} target="_blank" rel="noreferrer noopener">
                {title}
                <Icon className="absolute right-4 top-1/2 w-5 -translate-y-1/2 text-primary-foreground" />
              </a>
            </Button>
          </GradientBorder>
        ))}
      </div>
    </div>
  );
}
