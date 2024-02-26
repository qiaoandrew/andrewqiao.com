import { notFound } from 'next/navigation';

import { PROJECTS } from '@/constants/projects';
import ProjectIntroduction from '@/components/sections/project/ProjectIntroduction';
import ProjectDetails from '@/components/sections/project/ProjectDetails';
import PortableText from '@/components/sections/portable-text/PortableText';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  if (!(slug in PROJECTS)) notFound();

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
      <div className="flex flex-col gap-16 md:flex-row md:gap-12 xl:gap-20">
        <ProjectDetails
          technologies={PROJECTS[slug].technologies}
          skills={PROJECTS[slug].skills}
          buttons={PROJECTS[slug].buttons}
        />
        <PortableText body={PROJECTS[slug].body} />
      </div>
    </>
  );
}
