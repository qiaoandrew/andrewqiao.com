import GradientText from "../typography/GradientText";

export default function Hero() {
  return (
    <section className="container mb-9">
      <h1 className="text-7 font-bold font-display max-w-[350px] xs:text-9 xs:leading-[56px] xs:max-w-[460px] sm:max-w-[550px] lg:max-w-[742px] lg:text-12 lg:leading-[76px]">
        I&apos;m <GradientText>Andrew Qiao</GradientText>. I build what the
        world needs <GradientText>tomorrow</GradientText>, today.
      </h1>
    </section>
  );
}
