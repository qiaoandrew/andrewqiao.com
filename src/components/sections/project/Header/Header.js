import { Fragment } from 'react';

const Header = (props) => {
  return (
    <Fragment>
      <h1 className="project__title">{props.project.name}</h1>
      <p className="project__overview">{props.project.overview}</p>
      <div className="project__mockup-1">
        <img
          src={props.mockup}
          alt={`${props.project.name} mockup`}
          className={`project__image-1 ${props.project.mockupClasses[1]} no-select-or-drag`}
        />
      </div>
    </Fragment>
  );
};

export default Header;
