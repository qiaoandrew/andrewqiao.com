import { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context';
import Nav from '../../../navigation/Nav/Nav';
import Button from '../../../UI/Button/Button';
import classes from './Landing.module.css';
import wavesLight from '../../../../img/waves/waves-light.svg';
import wavesDark from '../../../../img/waves/waves-dark.svg';

const Landing = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={classes.landing}>
      <Nav />
      <div className={classes['landing__content']}>
        <h1>Andrew Qiao</h1>
        <p>
          Hi! I am a grade 12 student with a passion for Computer Science and
          UI/UX Design.
        </p>
        <Button isLink={false} link={'#'}>
          Learn More!
        </Button>
      </div>
      <img
        src={themeContext.theme === 'light' ? wavesLight : wavesDark}
        className={`${classes.waves}`}
        id="waves"
        alt="Waves"
      />
    </div>
  );
};

export default Landing;
