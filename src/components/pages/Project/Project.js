import { Fragment, useContext } from 'react';
import Nav from '../../navigation/Nav/Nav';
import ThemeContext from '../../../store/theme-context';
import Waves from '../../UI/Waves/Waves';
import Header from '../../sections/project/Header/Header';
import Overview from '../../sections/project/Overview/Overview';
import './Project.css';
import Description from '../../sections/project/Description/Description';

// Page for each project
const Project = (props) => {
  const themeContext = useContext(ThemeContext);

  let mockup1, mockup2;
  if (props.project.hasDark) {
    if (themeContext.theme === 'light') {
      mockup1 = props.project.mockups[0];
      mockup2 = props.project.mockups[2];
    } else {
      mockup1 = props.project.mockups[1];
      mockup2 = props.project.mockups[3];
    }
  } else {
    mockup1 = props.project.mockups[0];
    mockup2 = props.project.mockups[1];
  }

  return (
    <Fragment>
      <Nav />
      <Waves />
      <div className="section project">
        <Header project={props.project} mockup={mockup1} />
        <Overview project={props.project} />
        <Description project={props.project} mockup={mockup2} />
      </div>
    </Fragment>
  );
};

export default Project;
