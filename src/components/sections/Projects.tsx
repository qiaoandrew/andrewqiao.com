import pethsappMockup from '../../../public/img/mockups/pethsapp.png';
import ProjectCard from '@/components/elements/ProjectCard';
import ID from '@/components/navigation/ID';

const PROJECTS = [
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    type: 'Mobile App',
    mockup: pethsappMockup,
  },
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    type: 'Mobile App',
    mockup: pethsappMockup,
  },
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    type: 'Mobile App',
    mockup: pethsappMockup,
  },
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    type: 'Mobile App',
    mockup: pethsappMockup,
  },
];

export default function Projects() {
  return (
    <section className="mb-34 md:mb-49 container grid gap-6 md:grid-cols-2 lg:gap-12">
      <ID id="projects" />
      {PROJECTS.map(({ id, title, type, mockup }) => (
        <ProjectCard
          id={id}
          key={id}
          title={title}
          type={type}
          mockup={mockup}
        />
      ))}
    </section>
  );
}
