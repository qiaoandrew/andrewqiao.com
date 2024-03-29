import { type StaticImageData } from 'next/image';
import { type IconType } from 'react-icons';

export type Button = {
  id: string;
  title: string;
  href: string;
  Icon: IconType;
};

export type BlockChild = {
  type: 'span' | 'a';
  href?: string;
  marks: string[];
  text: string;
};

export type Block =
  | {
      style: 'h2' | 'h3' | 'normal';
      children: BlockChild[];
    }
  | {
      style: 'img';
      alt: string;
      srcLight: StaticImageData;
      srcDark: StaticImageData;
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
  body: Block[];
};
