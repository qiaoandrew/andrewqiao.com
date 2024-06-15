import { PROJECT_CARDS } from '@/constants/projects';
import ProjectCard from '@/components/elements/ProjectCard';
import ID from '@/components/navigation/ID';

export default function Projects() {
  return (
    <section className="container mb-34 grid gap-6 md:mb-49 md:grid-cols-2 lg:gap-12">
      <ID id="projects" />
      {PROJECT_CARDS.map(
        ({ id, title, href, type, lightMockup, darkMockup }) => (
          <ProjectCard
            key={id}
            title={title}
            type={type}
            href={href}
            lightMockup={lightMockup}
            darkMockup={darkMockup}
          />
        )
      )}
    </section>
  );
}
