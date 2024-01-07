import pethsappMockup from '../../../public/img/mockups/pethsapp.png';
import ProjectCard from '@/components/elements/ProjectCard';

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
    <section className="container mb-25 grid gap-6 md:mb-40">
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
