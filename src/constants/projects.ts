import { SiAppstore } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';

import pethsapp2LightMockup from '../../public/img/mockups/pethsapp-2-light.png';
import pethsapp2DarkMockup from '../../public/img/mockups/pethsapp-2-dark.png';
import pethsapp3LightMockup from '../../public/img/mockups/pethsapp-3-light.png';
import pethsapp3DarkMockup from '../../public/img/mockups/pethsapp-3-dark.png';
import type { Project } from '@/types/types';

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
        style: 'h1',
        children: [
          {
            marks: [],
            text: '[0]: Going Mobile',
          },
        ],
      },
      {
        style: 'p',
        children: [
          {
            marks: [],
            text: 'Pethsapp is the official mobile app of my former high school, Pierre Elliott Trudeau High School. It has ',
          },
          {
            marks: ['strong'],
            text: '1200+ users',
          },
          {
            marks: [],
            text: ', including students, parents, and teachers in the school community. Upon release, it peaked at ',
          },
          {
            marks: ['strong'],
            text: 'Top 15 on the Apple App Store Education Chart',
          },
          {
            marks: [],
            text: '.',
          },
        ],
      },
      {
        style: 'img',
        srcLight: pethsapp3LightMockup,
        srcDark: pethsapp3DarkMockup,
      },
    ],
  },
};
