import Section from '../../../containers/Section/Section';
import Grid from '../../../UI/Grid/Grid';
import Card from '../../../UI/Card/Card';
import ExperienceCardContent from '../../../containers/ExperienceCardContent/ExperienceCardContent';
import { experiences } from '../../../../constants/constants';

// Experiences section on homepage
const Experiences = () => {
  return (
    <Section id="experiences" className="bottom-margin">
      <h2 className="section__title">Experiences</h2>
      <Grid>
        {experiences.map((experience, i) => {
          return (
            <Card key={`experience-card-${i}`}>
              <ExperienceCardContent experience={experience} />
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Experiences;
