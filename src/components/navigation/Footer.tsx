import GradientText from '@/components/typography/GradientText';
import SocialButtons from '@/components/elements/SocialButtons';
import FooterMenu from '@/components/navigation/FooterMenu';

export default function Footer() {
  return (
    <footer className="container flex flex-col gap-12 border-t border-t-border pb-9 pt-6 sm:flex-row sm:justify-between">
      <div>
        <h3 className="font-display text-6 font-semibold">
          <GradientText>Andrew Qiao</GradientText>
        </h3>
        <a
          href="mailto:andrew.qiao@uwaterloo.ca"
          className="font-display text-4 font-medium text-secondary-foreground"
        >
          andrew.qiao@uwaterloo.ca
        </a>
        <SocialButtons />
      </div>
      <FooterMenu />
    </footer>
  );
}
