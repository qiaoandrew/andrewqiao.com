import Image from 'next/image';
import Link from 'next/link';

import headshot from '../../../public/img/headshot.png';
import { Button } from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';
import ID from '@/components/navigation/ID';

const ABOUT = `Hi! I'm Andrew, a Computer Science student at UWaterloo. Currently, I'm interning as a Software Developer at IBM. In the past, I've also interned at TD Bank, the University of Toronto, and University Health Network.

For me, programming is all about building and fixing. I want to build easy-to-use products that address meaningful pain points that the people around me experience.

In my free time, I love to play tennis, lift weights, and dabble in UI/UX design. I'm always open to meeting new people, so if you're building something interesting or want to chat, please message me!

I'm also currently seeking Summer 2024 internships. If you think I'd be a great match for your team, I'd love to hear from you!`;

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
          <GradientBorder borderRadius="rounded-[13px] md:rounded-[17px] w-full md:w-auto">
            <Button size="lg" asChild className="w-full">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}
