import type { StaticImageData } from 'next/image';

type ProjectCardProps = {
  id: string;
  title: string;
  type: string;
  mockup: StaticImageData;
};

export default function ProjectCard({
  id,
  title,
  type,
  mockup,
}: ProjectCardProps) {
  return <div></div>;
}
