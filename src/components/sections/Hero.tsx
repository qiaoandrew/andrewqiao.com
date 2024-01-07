import GradientText from '../typography/GradientText';

export default function Hero() {
  return (
    <section className="container mb-9 pt-21 sm:pt-24 md:mb-12 md:pt-32 xl:mb-16 2xl:pt-36">
      <h1 className="max-w-[350px] font-display text-7 font-bold xs:max-w-[460px] xs:text-9 xs:leading-[56px] sm:max-w-[550px] lg:max-w-[742px] lg:text-12 lg:leading-[76px]">
        I&apos;m <GradientText>Andrew Qiao</GradientText>. I build what the
        world needs <GradientText>tomorrow</GradientText>, today.
      </h1>
    </section>
  );
}
