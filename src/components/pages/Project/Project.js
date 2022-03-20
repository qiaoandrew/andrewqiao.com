import { Fragment, useContext } from 'react';
import Nav from '../../navigation/Nav/Nav';
import ThemeContext from '../../../store/theme-context';
import Button from '../../UI/Button/Button';
import Waves from '../../UI/Waves/Waves';
import Card from '../../UI/Card/Card';
import aboutIcon from '../../../img/icons/about-icon.svg';
import motivationIcon from '../../../img/icons/motivation-icon.svg';
import rolesIcon from '../../../img/icons/roles-icon.svg';
import './Project.css';

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
        <h1 className="project__title">{props.project.name}</h1>
        <p className="project__overview">{props.project.overview}</p>
        <div className="project__mockup-1">
          <img
            src={mockup1}
            alt={`${props.project.name} mockup`}
            className={`project__image-1 ${props.project.mockupClasses[1]} no-select-or-drag`}
          />
        </div>
        <h2 className="section__title">Overview</h2>
        <div className="project__overview-grid">
          <Card
            withGradientBackground={true}
            withBottomGradient={false}
            withTransform={false}
          >
            <div className="project__card-content">
              <h3 className="project__card-title">About</h3>
              <p className="project__card-description">{props.project.about}</p>
              <img
                src={aboutIcon}
                alt="About icon"
                className="project__card-icon no-select-or-drag"
              />
            </div>
          </Card>
          <Card
            withGradientBackground={true}
            withBottomGradient={false}
            withTransform={false}
          >
            <div className="project__card-content">
              <h3 className="project__card-title">Motivation</h3>
              <p className="project__card-description">
                {props.project.motivation}
              </p>
              <img
                src={motivationIcon}
                alt="Motivation icon"
                className="project__card-icon no-select-or-drag"
              />
            </div>
          </Card>
          <Card
            withGradientBackground={true}
            withBottomGradient={false}
            withTransform={false}
          >
            <div className="project__card-content">
              <h3 className="project__card-title">Roles</h3>
              <p className="project__card-description">{props.project.roles}</p>
              <img
                src={rolesIcon}
                alt="Roles icon"
                className="project__card-icon no-select-or-drag"
              />
            </div>
          </Card>
        </div>
        <div className="project__description">
          <div className="project__description-text">
            <h2 className="section__title project__description-title">
              Description
            </h2>
            {props.project.descriptions.map((description) => {
              return (
                <p className="project__description-paragraph">{description}</p>
              );
            })}
            <Button isLink={false} link={props.project.buttonLink}>
              {props.project.buttonText}
            </Button>
          </div>
          <div className="project__description__mockup">
            <img
              src={mockup2}
              alt={`${props.project.name} mockup`}
              className={`project__description__mockup-image no-select-or-drag ${props.project.mockupClasses[2]}`}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
