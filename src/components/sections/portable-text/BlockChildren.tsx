import { cn } from '@/lib/utils';
import { type BlockChild } from '@/types/types';

interface BlockChildrenProps {
  blockChildren: BlockChild[];
}

export default function BlockChildren({ blockChildren }: BlockChildrenProps) {
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
