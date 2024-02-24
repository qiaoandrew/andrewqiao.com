import { notFound } from 'next/navigation';

import { PROJECTS } from '@/constants/projects';
import ProjectIntroduction from '@/components/sections/project/ProjectIntroduction';
import ProjectDetails from '@/components/sections/project/ProjectDetails';
import ProjectBody from '@/components/sections/project/ProjectBody';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  if (!(slug in PROJECTS)) {
    notFound();
  }

  const { title, type, description, mockupLight, mockupDark } = PROJECTS[slug];

  return (
    <>
      <ProjectIntroduction
        title={title}
        type={type}
        description={description}
        mockupLight={mockupLight}
        mockupDark={mockupDark}
      />
      <div className="flex flex-col gap-16 md:flex-row md:gap-12 xl:gap-18">
        <ProjectDetails
          technologies={PROJECTS[slug as keyof typeof PROJECTS].technologies}
          skills={PROJECTS[slug as keyof typeof PROJECTS].skills}
          buttons={PROJECTS[slug as keyof typeof PROJECTS].buttons}
        />
        <ProjectBody body={PROJECTS[slug as keyof typeof PROJECTS].body} />
      </div>
    </>
  );
}
