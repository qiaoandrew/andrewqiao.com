import { SiAppstore } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';

import { type Project } from '@/types/types';

import pethsappLightCardMockup from '../../public/img/mockups/card/pethsapp-light.png';
import pethsappDarkCardMockup from '../../public/img/mockups/card/pethsapp-dark.png';
import remaxCardMockup from '../../public/img/mockups/card/remax.png';
import quadraticUICardLightMockup from '../../public/img/mockups/card/quadratic-ui-light.png';
import quadraticUICardDarkMockup from '../../public/img/mockups/card/quadratic-ui-dark.png';
import uwdscMockup from '../../public/img/mockups/card/uwdsc.png';

import pethsappLightHeroMockup from '../../public/img/mockups/hero/pethsapp-light.png';
import pethsappDarkHeroMockup from '../../public/img/mockups/hero/pethsapp-dark.png';

import pethsappLight1Mockup from '../../public/img/mockups/content/pethsapp-1-light.png';
import pethsappDark1Mockup from '../../public/img/mockups/content/pethsapp-1-dark.png';

export const PROJECT_CARDS = [
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    href: '/projects/pethsapp',
    type: 'Mobile App',
    lightMockup: pethsappLightCardMockup,
    darkMockup: pethsappDarkCardMockup,
  },
  {
    id: 'remax',
    title: 'RE/MAX',
    href: 'https://www.preconstruction.app',
    type: 'Web App',
    lightMockup: remaxCardMockup,
    darkMockup: remaxCardMockup,
  },
  {
    id: 'quadratic-ui',
    title: 'quadratic/ui',
    type: 'Coming soon...',
    lightMockup: quadraticUICardLightMockup,
    darkMockup: quadraticUICardDarkMockup,
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
    mockupLight: pethsappLightHeroMockup,
    mockupDark: pethsappDarkHeroMockup,
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
            // text: '[0]: Going Mobile',
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
        srcLight: pethsappLight1Mockup,
        srcDark: pethsappDark1Mockup,
      },
      // {
      //   style: 'h2',
      //   children: [
      //     {
      //       style: 'span',
      //       marks: [],
      //       text: '[1]: Pandemic Problems',
      //     },
      //   ],
      // },
      // {
      //   style: 'p',
      //   children: [
      //     {
      //       style: 'span',
      //       marks: [],
      //       text: 'In 2020, students were introduced to an obstacle like no other. With the start of the COVID-19 pandemic, students went from interactive, in-person classes to a completely online experience.',
      //     },
      //   ],
      // },
      // {
      //   style: 'p',
      //   children: [
      //     {
      //       style: 'span',
      //       marks: [],
      //       text: 'With this shift, I started noticing students becoming disconnected from the school community. Additionally, with the absence of announcements, there was no longer a daily reminder about club events, greatly reducing social connection.',
      //     },
      //   ],
      // },
      // {
      //   style: 'p',
      //   children: [
      //     {
      //       style: 'span',
      //       marks: [],
      //       text: "I strongly believe that school should be a very social environment. It's a one-of-a-kind place where students can connect based on their shared interests and passions.",
      //     },
      //   ],
      // },
      // {
      //   style: 'h2',
      //   children: [
      //     {
      //       style: 'span',
      //       marks: [],
      //       text: '[2]: Technology for Reconnection',
      //     },
      //   ],
      // },
    ],
  },
};
