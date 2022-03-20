import Chip from '../../UI/Chip/Chip';
import arrowIcon from '../../../img/icons/arrow-icon.svg';
import './ExperienceCardContent.css';

const ExperienceCardContent = (props) => {
  return (
    <div className="experience-card-content">
      <h3 className="experience-card-content__title">
        {props.experience.title}
      </h3>
      <p className="experience-card-content__company">
        {props.experience.company}
      </p>
      <Chip>{props.experience.date}</Chip>
      <Chip>{props.experience.location}</Chip>
      {props.experience.description.map((point, i) => {
        return (
          <div
            key={`experience-description-${i}`}
            className="experience-card-content__description"
          >
            <img
              src={arrowIcon}
              alt="Arrow"
              className="experience-card-content__arrow-icon no-select-or-drag"
            />
            <p className="experience-card-content__description-text">{point}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCardContent;
