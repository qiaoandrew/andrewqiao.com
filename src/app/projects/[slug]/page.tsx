import { notFound } from 'next/navigation';

import { PROJECTS } from '@/constants/projects';
import ProjectIntroduction from '@/components/sections/project/ProjectIntroduction';
import ProjectDetails from '@/components/sections/project/ProjectDetails';
import Footer from '@/components/navigation/Footer';

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
    <>
      <div className="container mb-36 md:mb-50">
        <ProjectIntroduction
          title={title}
          type={type}
          description={description}
          mockupLight={mockupLight}
          mockupDark={mockupDark}
        />
        <div className="md:flex md:gap-12 xl:gap-18">
          <ProjectDetails
            technologies={PROJECTS[slug as keyof typeof PROJECTS].technologies}
            skills={PROJECTS[slug as keyof typeof PROJECTS].skills}
            buttons={PROJECTS[slug as keyof typeof PROJECTS].buttons}
          />
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
