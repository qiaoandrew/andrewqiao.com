import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import wavesLight from '../../../img/waves/waves-light.svg';
import wavesDark from '../../../img/waves/waves-dark.svg';
import './Waves.css';

const Waves = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <img
      src={themeContext.theme === 'light' ? wavesLight : wavesDark}
      className="waves no-select-or-drag"
      id="waves"
      alt="Waves"
    />
  );
};

export default Waves;
