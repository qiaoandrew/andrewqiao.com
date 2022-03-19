import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import { Link } from 'react-router-dom';
import openIcon from '../../../img/icons/open-icon.svg';
import './ProjectCardContent.css';

// Content inside a project card on homepage
const ProjectCardContent = (props) => {
  const themeContext = useContext(ThemeContext);

  // Determine mockup
  let mockup;
  if (props.project.hasDark) {
    mockup =
      themeContext.theme === 'light'
        ? props.project.mockups[0]
        : props.project.mockups[1];
  } else {
    mockup = props.project.mockups[0];
  }

  return (
    <Link to={props.project.route}>
      <div className="project-card-content">
        <div className="project-card-content__text">
          <p className="project-card-content__type">{props.project.type}</p>
          <h3 className="project-card-content__name">
            {props.project.cardName}
          </h3>
        </div>
        <div className="project-card-content__open-button">
          <img
            src={openIcon}
            alt="Open icon"
            className="project-card-content__open-icon"
          />
        </div>
      </div>
      <img
        src={mockup}
        alt={`${props.project.name} mockup`}
        className={`project-card-mockup ${props.project.mockupClasses[0]}`}
      />
    </Link>
  );
};

export default ProjectCardContent;
