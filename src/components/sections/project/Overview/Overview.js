import { Fragment } from 'react';
import Card from '../../../UI/Card/Card';
import aboutIcon from '../../../../img/icons/about-icon.svg';
import motivationIcon from '../../../../img/icons/motivation-icon.svg';
import rolesIcon from '../../../../img/icons/roles-icon.svg';

const Overview = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Overview;
