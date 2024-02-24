import { SiAppstore } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';

import remaxMockup from '../../public/img/mockups/remax-1.png';
import quadraticUILightMockup from '../../public/img/mockups/quadratic-ui-1-light.png';
import quadraticUIDarkMockup from '../../public/img/mockups/quadratic-ui-1-dark.png';
import pethsappLightMockup from '../../public/img/mockups/pethsapp-1-light.png';
import pethsappDarkMockup from '../../public/img/mockups/pethsapp-1-dark.png';
import uwdscMockup from '../../public/img/mockups/uwdsc-1.png';
import pethsapp2LightMockup from '../../public/img/mockups/pethsapp-2-light.png';
import pethsapp2DarkMockup from '../../public/img/mockups/pethsapp-2-dark.png';
import pethsapp3LightMockup from '../../public/img/mockups/pethsapp-3-light.png';
import pethsapp3DarkMockup from '../../public/img/mockups/pethsapp-3-dark.png';
import { type Project } from '@/types/types';

export const PROJECT_CARDS = [
  {
    id: 'remax',
    title: 'RE/MAX',
    href: 'https://www.preconstruction.app',
    type: 'Web App',
    lightMockup: remaxMockup,
    darkMockup: remaxMockup,
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
    href: 'https://www.uwdatascience.ca/',
    type: 'Club Website',
    lightMockup: uwdscMockup,
    darkMockup: uwdscMockup,
  },
];

export const PROJECTS: Record<string, Project> = {
  pethsapp: {
    id: 'pethsapp',
    title: 'Pethsapp',
    type: 'Mobile Development + Design',
    description:
      'Engaging the school community during the pandemic through a mobile application.',
    mockupLight: pethsapp2LightMockup,
    mockupDark: pethsapp2DarkMockup,
    technologies: [
      'React Native',
      'Expo',
      'Firebase',
      'Google Cloud',
      'Sanity',
      'Figma',
    ],
    skills: ['Mobile Development', 'UI/UX Design', 'User Research'],
    buttons: [
      {
        id: 'app-store',
        title: 'App Store',
        href: 'https://apps.apple.com/ca/app/pethsapp/id1544635100',
        Icon: SiAppstore,
      },
      {
        id: 'google-play',
        title: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.trudeausac.pethsapp&hl=en_CA&gl=US',
        Icon: FaGoogle,
      },
    ],
    body: [
      {
        style: 'h2',
        children: [
          {
            style: 'span',
            marks: [],
            text: 'About',
          },
        ],
      },
      {
        style: 'p',
        children: [
          {
            style: 'span',
            marks: [],
            text: 'Pethsapp is the official mobile app of my former high school, Pierre Elliott Trudeau High School. It has ',
          },
          {
            style: 'span',
            marks: ['strong'],
            text: '1200+ users',
          },
          {
            style: 'span',
            marks: [],
            text: ', including students, parents, and teachers in the school community. Upon release, it peaked at ',
          },
          {
            style: 'span',
            marks: ['strong'],
            text: 'Top 15 on the Apple App Store Education Chart',
          },
          {
            style: 'span',
            marks: [],
            text: '.',
          },
        ],
      },
      {
        style: 'p',
        children: [
          {
            style: 'span',
            marks: [],
            text: "It serves as the school's mobile hub, helping students stay updated on school events, announcements, and new opportunities.",
          },
        ],
      },
      {
        style: 'img',
        alt: 'pethsapp mockup 1',
        srcLight: pethsapp3LightMockup,
        srcDark: pethsapp3DarkMockup,
      },
    ],
  },
};
