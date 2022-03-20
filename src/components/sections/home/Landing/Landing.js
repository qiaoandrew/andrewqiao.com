import Nav from '../../../navigation/Nav/Nav';
import Button from '../../../UI/Button/Button';
import Waves from '../../../UI/Waves/Waves';
import './Landing.css';

// Homepage landing
const Landing = () => {
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
      <Waves />
    </div>
  );
};

export default Landing;
