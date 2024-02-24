import Image from 'next/image';
import Link from 'next/link';

import headshot from '../../../../public/img/headshot.png';
import { ABOUT } from '@/constants/about';
import { Button } from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';
import ID from '@/components/navigation/ID';

export default function About() {
  return (
    <section className="container mb-30 md:mb-50">
      <ID id="about" />
      <div className="mx-auto max-w-[440px] md:max-w-[580px]">
        <Image
          src={headshot}
          alt="Andrew Qiao headshot"
          width={180}
          height={180}
          className="mx-auto mb-9 w-40 rounded-full md:mb-12 md:w-[180px]"
        />
        <p className="mx-auto mb-16 whitespace-pre-line font-display text-4 text-foreground md:mb-25 md:text-4.5">
          {ABOUT}
        </p>
        <div className="flex justify-stretch sm:justify-center">
          <GradientBorder borderRadius="rounded-[13px] md:rounded-[15px] w-full md:w-auto">
            <Button size="lg" asChild className="w-full">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}
