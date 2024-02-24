import Image from 'next/image';

import { cn } from '@/lib/utils';
import { type Block, type BlockChild } from '@/types/types';
import GradientText from '@/components/typography/GradientText';

interface ProjectBodyProps {
  body: Block[];
}

function BlockChildren({ blockChildren }: { blockChildren: BlockChild[] }) {
  return blockChildren.map((child, j) => {
    if (child.style === 'span') {
      return (
        <span
          className={cn(child.marks.includes('strong') && 'font-semibold')}
          key={j}
        >
          {child.text}
        </span>
      );
    } else if (child.style === 'a') {
      return (
        <a key={j} href={child.href} target="_blank" rel="noopener noreferrer">
          {child.text}
        </a>
      );
    } else {
      return <></>;
    }
  });
}

export default function ProjectBody({ body }: ProjectBodyProps) {
  return (
    <div>
      {body.map((block, i) => {
        if (block.style === 'p') {
          return (
            <p
              className="mt-4 text-4 text-primary-foreground xl:mt-5 xl:text-4.5"
              key={i}
            >
              <BlockChildren blockChildren={block.children} />
            </p>
          );
        } else if (block.style === 'h2') {
          return (
            <h2
              className="-mb-2 mt-12 font-display text-7 font-bold first:mt-0 xl:text-9"
              key={i}
            >
              <GradientText>
                <BlockChildren blockChildren={block.children} />
              </GradientText>
            </h2>
          );
        } else if (block.style === 'img') {
          return (
            <div className="group mt-8 border border-ring xl:mt-12" key={i}>
              <Image
                src={block.srcLight}
                alt={block.alt}
                key={i}
                className="transition-transform duration-200 dark:hidden"
              />
              <Image
                src={block.srcDark}
                alt={block.alt}
                key={i}
                className="hidden transition-transform duration-200 group-hover:scale-[1.02] dark:block"
              />
            </div>
          );
        }
      })}
    </div>
  );
}
