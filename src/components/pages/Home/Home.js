import { Fragment } from 'react';
import Landing from '../../sections/home/Landing/Landing';
import Projects from '../../sections/home/Projects/Projects';
import Experiences from '../../sections/home/Experiences/Experiences';
import About from '../../sections/home/About/About';

// Home page
const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Projects />
      <Experiences />
      <About />
    </Fragment>
  );
};

export default Home;
