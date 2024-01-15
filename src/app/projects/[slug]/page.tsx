import { notFound } from 'next/navigation';

import { PROJECTS } from '@/constants/projects';
import ProjectIntroduction from '@/components/sections/project/ProjectIntroduction';

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  if (!(slug in PROJECTS)) {
    notFound();
  }

  const { title, type, description, mockupLight, mockupDark } =
    PROJECTS[slug as keyof typeof PROJECTS];

  return (
    <div className="container">
      <ProjectIntroduction
        title={title}
        type={type}
        description={description}
        mockupLight={mockupLight}
        mockupDark={mockupDark}
      />
    </div>
  );
}
