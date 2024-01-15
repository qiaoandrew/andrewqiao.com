import { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';

export type Button = {
  id: string;
  title: string;
  href: string;
  Icon: IconType;
};

export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  mockupLight: StaticImageData;
  mockupDark: StaticImageData;
  technologies: string[];
  skills: string[];
  buttons: Button[];
  body: (
    | {
        style: 'h1' | 'p';
        children: {
          marks: string[];
          text: string;
        }[];
      }
    | {
        style: 'img';
        srcLight: StaticImageData;
        srcDark: StaticImageData;
      }
  )[];
};
