import pethsappLightMockup from '../../../public/img/mockups/pethsapp-1-light.svg';
import pethsappDarkMockup from '../../../public/img/mockups/pethsapp-1-dark.svg';
import quadraticUILightMockup from '../../../public/img/mockups/quadratic-ui-1-light.svg';
import quadraticUIDarkMockup from '../../../public/img/mockups/quadratic-ui-1-dark.svg';
import ProjectCard from '@/components/elements/ProjectCard';
import ID from '@/components/navigation/ID';

const PROJECTS = [
  {
    id: 'remax',
    title: 'RE/MAX',
    // href: '/projects/remax',
    type: 'Coming soon...',
    lightMockup: pethsappLightMockup,
    darkMockup: pethsappDarkMockup,
  },
  {
    id: 'quadratic-ui',
    title: 'quadratic/ui',
    type: 'Coming soon...',
    lightMockup: quadraticUILightMockup,
    darkMockup: quadraticUIDarkMockup,
  },
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    href: '/projects/pethsapp',
    type: 'Mobile App',
    lightMockup: pethsappLightMockup,
    darkMockup: pethsappDarkMockup,
  },
  {
    id: 'uwdsc',
    title: 'UW Data Science',
    href: '/projects/uwdsc',
    type: 'Club Website',
    lightMockup: pethsappLightMockup,
    darkMockup: pethsappDarkMockup,
  },
];

export default function Projects() {
  return (
    <section className="mb-34 md:mb-49 container grid gap-6 md:grid-cols-2 lg:gap-12">
      <ID id="projects" />
      {PROJECTS.map(({ id, title, href, type, lightMockup, darkMockup }) => (
        <ProjectCard
          id={id}
          key={id}
          title={title}
          type={type}
          href={href}
          lightMockup={lightMockup}
          darkMockup={darkMockup}
        />
      ))}
    </section>
  );
}
