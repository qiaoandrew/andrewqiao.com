import { BookOpenIcon, MicroscopeIcon } from 'lucide-react';

import ExperienceButton from '@/components/buttons/ExperienceButton';
import ibmLogo from '../../public/img/logos/ibm-logo.png';
import uhnLogo from '../../public/img/logos/uhn-logo.png';
import tdLogo from '../../public/img/logos/td-logo.png';
import uoftLogo from '../../public/img/logos/uoft-logo.png';

export const EXPERIENCES = [
  {
    id: 'ibm',
    company: 'IBM',
    role: 'Software Developer Intern',
    date: 'Jan 2024 - Present',
    location: 'Toronto, ON',
    points: ['Recently started this exciting role on an exciting team!'],
    icon: ibmLogo,
    buttons: [],
  },
  {
    id: 'uhn',
    company: 'University Health Network',
    role: 'Software Developer Intern',
    date: 'Oct 2023 - Dec 2023',
    location: 'Toronto, ON',
    points: [
      "Deployed an app integrated with GPT-4V to evaluate AI's effectiveness in diagnosing <strong>100+</strong> medical conditions",
      "Assisted <strong>8 clinicians</strong> at Canada's largest research hospital in assessing AI's applicability for clinical care and education, contributing to published medical research",
      '<strong>Skills</strong>: Next.js, React.js, Google Cloud, Firebase, TypeScript, Python, Tailwind CSS',
    ],
    icon: uhnLogo,
    buttons: [
      <ExperienceButton
        href="https://www.medrxiv.org/content/10.1101/2023.11.15.23298575v1"
        Icon={MicroscopeIcon}
        key="published-research"
      >
        Published Research
      </ExperienceButton>,
    ],
  },
  {
    id: 'td',
    company: 'TD Bank',
    role: 'Software Developer Intern',
    date: 'May 2023 - Aug 2023',
    location: 'Toronto, ON',
    points: [
      'Saved Portfolio Managers <strong>10+ hours a week</strong> in waiting on synchronous tasks by developing a distributed system to defer lengthy portfolio model recalculations using Celery and Python',
      'Removed <strong>5+ hours a week</strong> of data entry by automating financial report generation with Django and SQL',
      'Decreased tool loading speed by <strong>67%</strong>, removing excessive API calls by applying React best practices',
      'Fixed <strong>20+ bugs</strong> by implementing thorough testing frameworks using the Python unittest library',
      '<strong>Skills:</strong>: React.js, Microsoft Azure, Django, SQL Server, JavaScript, Python, NumPy, Pandas',
    ],
    icon: tdLogo,
    buttons: [],
  },
  {
    id: 'uoft',
    company: 'University of Toronto',
    role: 'Research Developer Intern',
    date: 'Oct 2022 - Apr 2023',
    location: 'Toronto, ON',
    points: [
      "Contributed to a <strong>university-partnered study with OpenAI</strong> on the workforce's perception of AI under the supervision of Dr. M. Andiappan and Dr. G. Hadfield",
      "Streamlined data collection for the study's <strong>500+ participants</strong> by deploying an AI-powered survey platform",
      '<strong>Skills</strong>: Next.js, React.js, Google Cloud, Firebase, JavaScript, Node.js, OpenAI API',
    ],
    icon: uoftLogo,
    buttons: [
      <ExperienceButton
        href="https://ihpme.utoronto.ca/2022/06/beyond-myths-dr-meena-andiappan-to-study-attitudes-and-perceptions-of-ai-in-the-workplace/"
        Icon={BookOpenIcon}
        key="about-the-study"
      >
        About the Study
      </ExperienceButton>,
    ],
  },
];
