import { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context';
import Nav from '../../../navigation/Nav/Nav';
import Button from '../../../UI/Button/Button';
import './Landing.css';
import wavesLight from '../../../../img/waves/waves-light.svg';
import wavesDark from '../../../../img/waves/waves-dark.svg';

// Homepage landing
const Landing = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="landing">
      <Nav />
      <div className="landing__content">
        <h1 className="landing__title">Andrew Qiao</h1>
        <p className="landing__description">
          Hi! I am a grade 12 student with a passion for Computer Science and
          UI/UX Design.
        </p>
        <Button isLink={false} link={'/#projects'}>
          Learn More!
        </Button>
      </div>
      <img
        src={themeContext.theme === 'light' ? wavesLight : wavesDark}
        className="landing__waves no-select-or-drag"
        id="waves"
        alt="Waves"
      />
    </div>
  );
};

export default Landing;
