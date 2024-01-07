import { Fragment } from 'react';

import ibmLogo from '../../../public/img/logos/ibm-logo.png';
import uhnLogo from '../../../public/img/logos/uhn-logo.png';
import tdLogo from '../../../public/img/logos/td-logo.png';
import uoftLogo from '../../../public/img/logos/uoft-logo.png';
import GradientText from '@/components/typography/GradientText';
import Experience from '@/components/elements/Experience';

const EXPERIENCES = [
  {
    id: 'ibm',
    company: 'IBM',
    role: 'Software Developer Intern',
    date: 'Jan 2024 - Present',
    location: 'Toronto, ON',
    points: ['Recently started this exciting new role!'],
    icon: ibmLogo,
  },
  {
    id: 'uhn',
    company: 'University Health Network',
    role: 'Software Developer Intern',
    date: 'Oct 2023 - Dec 2023',
    location: 'Toronto, ON',
    points: [
      'Evaluated AI effectiveness in diagnosing 100+ health conditions by building a GPT-4V platform',
      "Assisted 8 clinicians at Canada's largest research hospital in determining AI's suitably for clinical care and education",
      'Skills: Next.js, React.js, Google Cloud, Firebase, TypeScript, Python, Tailwind CSS',
    ],
    icon: uhnLogo,
  },
  {
    id: 'td',
    company: 'TD Bank',
    role: 'Software Developer Intern',
    date: 'May 2023 - Aug 2023',
    location: 'Toronto, ON',
    points: [
      'Developed a distributed system to defer model recalculations using Celery and Python, saving 10+ hours a week in waiting on synchronous tasks',
      'Automated trade report generation using Django and SQL, removing 5+ hours a week of data entry',
      'Decreased tool loading speed by 67%, removing excessive API calls by applying React best practices',
      'Implemented thorough testing frameworks using the Python unittest library, fixing 20+ bugs',
    ],
    icon: tdLogo,
  },
  {
    id: 'uoft',
    company: 'University of Toronto',
    role: 'Research Developer Intern',
    date: 'Oct 2022 - Apr 2023',
    location: 'Toronto, ON',
    points: [
      "Supervised by Dr. M. Andiappan and Dr. G. Hadfield in analyzing AI's impact on the workforce",
      'Deployed an AI-powered survey platform to streamline data collection processes for 500+ participants',
      'Contributed to a university-partnered collaboration with OpenAI',
      'Skills: Next.js, React.js, Google Cloud, Firebase, JavaScript, Tailwind CSS',
    ],
    icon: uoftLogo,
  },
];

export default function Experiences() {
  return (
    <section className="mb-30 md:mb-50 container">
      <h2 className="mb-5 font-display text-7 font-bold md:mb-6 md:text-10">
        <GradientText>Experiences</GradientText>
      </h2>
      {EXPERIENCES.map(
        ({ id, company, role, date, location, points, icon }, i) => (
          <Fragment key={id}>
            <Experience
              company={company}
              role={role}
              date={date}
              location={location}
              points={points}
              icon={icon}
            />
            {i !== EXPERIENCES.length - 1 && (
              <hr className="mb-6 mt-9 text-border" />
            )}
          </Fragment>
        )
      )}
    </section>
  );
}
