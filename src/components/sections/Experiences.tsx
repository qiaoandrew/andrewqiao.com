import { Fragment } from 'react';

import GradientText from '@/components/typography/GradientText';
import Experience from '@/components/elements/Experience';

const EXPERIENCES = [
  {
    id: 'ibm',
    company: 'IBM',
    role: 'Software Developer Intern',
    date: 'Jan 2024 - Present',
    location: 'Toronto, ON',
    points: [],
  },
  {
    id: 'uhn',
    company: 'University Health Network',
    role: 'Software Developer Intern',
    date: 'Oct 2023 - Dec 2023',
    location: 'Toronto, ON',
    points: [],
  },
  {
    id: 'td',
    company: 'TD Bank',
    role: 'Software Developer Intern',
    date: 'May 2023 - Aug 2023',
    location: 'Toronto, ON',
    points: [],
  },
  {
    id: 'uoft',
    company: 'University of Toronto',
    role: 'Research Developer Intern',
    date: 'Oct 2022 - Apr 2023',
    location: 'Toronto, ON',
    points: [],
  },
];

export default function Experiences() {
  return (
    <section className="mb-30 md:mb-50 container">
      <h2 className="mb-5 font-display text-7 font-bold md:mb-6 md:text-10">
        <GradientText>Experiences</GradientText>
      </h2>
      {EXPERIENCES.map(({ id, company, role, date, location, points }, i) => (
        <Fragment key={id}>
          <Experience
            company={company}
            role={role}
            date={date}
            location={location}
            points={points}
          />
          {i !== EXPERIENCES.length - 1 && (
            <hr className="mb-6 mt-9 text-border" />
          )}
        </Fragment>
      ))}
    </section>
  );
}
