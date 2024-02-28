import { cn } from '@/lib/utils';
import { type BlockChild } from '@/types/types';

interface BlockChildrenProps {
  blockChildren: BlockChild[];
}

export default function BlockChildren({ blockChildren }: BlockChildrenProps) {
  return blockChildren.map((child, j) => {
    const className = cn(
      child.marks.includes('strong') && 'font-semibold',
      child.marks.includes('code') && '',
      child.marks.includes('italic') && '',
      child.marks.includes('underline') && 'underline underline-offset-2',
      child.marks.includes('strike-through') && '',
      child.marks.includes('highlight') && '',
      child.marks.includes('subscript') && '',
      child.marks.includes('superscript') && ''
    );

    if (child.type === 'span') {
      return (
        <span className={className} key={j}>
          {child.text}
        </span>
      );
    } else if (child.type === 'a') {
      return (
        <a
          key={j}
          href={child.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {child.text}
        </a>
      );
    } else {
      return <></>;
    }
  });
}
