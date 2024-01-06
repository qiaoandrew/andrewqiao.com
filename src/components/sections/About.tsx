import Image from 'next/image';

import headshot from '../../../public/img/headshot.png';
import { Button } from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';

const ABOUT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat lectus massa, sit amet pellentesque mauris molestie porta. Morbi semper dolor neque, quis sodales dolor malesuada in. Nulla at urna at libero malesuada imperdiet eget eu nunc. Integer ac dolor in tortor porttitor commodo euismod ut magna.

Duis eu orci eget dolor hendrerit egestas nec eget magna. Ut est velit, aliquet id volutpat sit amet, venenatis nec diam. Sed id rhoncus dui. Fusce elementum hendrerit purus a faucibus. Nulla id sodales enim, a volutpat risus.

Sed facilisis ornare suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lectus non odio faucibus imperdiet. Praesent quis fermentum nulla. Duis laoreet feugiat nisi, et feugiat sem tincidunt vel. `;

export default function About() {
  return (
    <section className="mb-30 md:mb-50 container">
      <div className="mx-auto max-w-[440px] md:max-w-[580px]">
        <Image
          src={headshot}
          alt="Andrew Qiao headshot"
          width={180}
          height={180}
          className="mx-auto mb-9 w-40 rounded-full md:mb-12 md:w-[180px]"
        />
        <p className="md:mb-25 mx-auto mb-16 whitespace-pre-line font-display text-4 text-foreground md:text-4.5">
          {ABOUT}
        </p>
        <div className="flex justify-stretch sm:justify-center">
          <GradientBorder borderRadius="rounded-[13px] md:rounded-[17px] w-full md:w-auto">
            <Button size="lg" className="w-full">
              Contact Me
            </Button>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}
