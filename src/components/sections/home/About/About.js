import Section from '../../../containers/Section/Section';
import { about } from '../../../../constants/constants';
import Button from '../../../UI/Button/Button';
import './About.css';

// About section on homepage
const About = () => {
  return (
    <Section id="about">
      <div className="about">
        <img
          src={about.portrait}
          alt="Andrew Qiao portrait"
          className="about__portrait no-select-or-drag"
        />
        <div className="about__socials">
          {about.socials.map((social) => {
            return (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="about__social-link"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="about__social-icon no-select-or-drag"
                />
              </a>
            );
          })}
        </div>
        <div className="about__descriptions">
          {about.descriptions.map((description) => {
            return <p className="about__description">{description}</p>;
          })}
        </div>
        <Button
          isLink={false}
          link="mailto:andrewqiao2004@gmail.com"
          newPage={true}
        >
          Email Me! 👋
        </Button>
      </div>
    </Section>
  );
};

export default About;
