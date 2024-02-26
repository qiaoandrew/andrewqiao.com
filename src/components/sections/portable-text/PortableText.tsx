import Image from 'next/image';

import { type Block } from '@/types/types';
import GradientText from '@/components/typography/GradientText';
import BlockChildren from '@/components/sections/portable-text/BlockChildren';

interface PortableTextProps {
  body: Block[];
}

export default function PortableText({ body }: PortableTextProps) {
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
              className="-mb-1 mt-16 font-display text-7 font-bold first:mt-0 xl:mt-24 xl:text-9"
              key={i}
            >
              <GradientText>
                <BlockChildren blockChildren={block.children} />
              </GradientText>
            </h2>
          );
        } else if (block.style === 'img') {
          return (
            <div className="group my-8 border border-ring xl:my-12" key={i}>
              <Image
                src={block.srcLight}
                alt={block.alt}
                key={i}
                className="transition-transform duration-200 xl:group-hover:scale-[1.02] dark:hidden"
              />
              <Image
                src={block.srcDark}
                alt={block.alt}
                key={i}
                className="hidden transition-transform duration-200 xl:group-hover:scale-[1.02] dark:block"
              />
            </div>
          );
        }
      })}
    </div>
  );
}
