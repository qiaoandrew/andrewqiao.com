import Button from '../../../UI/Button/Button';

const Description = (props) => {
  return (
    <div className="project__description">
      <div className="project__description-text">
        <h2 className="section__title project__description-title">
          Description
        </h2>
        {props.project.descriptions.map((description, i) => {
          return (
            <p
              className="project__description-paragraph"
              key={`project-description-${i}`}
            >
              {description}
            </p>
          );
        })}
        <Button isLink={false} link={props.project.buttonLink} newPage={true}>
          {props.project.buttonText}
        </Button>
      </div>
      <div className="project__description__mockup">
        <img
          src={props.mockup}
          alt={`${props.project.name} mockup`}
          className={`project__description__mockup-image no-select-or-drag ${props.project.mockupClasses[2]}`}
        />
      </div>
    </div>
  );
};

export default Description;
