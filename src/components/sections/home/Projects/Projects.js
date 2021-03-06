import Section from '../../../containers/Section/Section';
import Grid from '../../../UI/Grid/Grid';
import Card from '../../../UI/Card/Card';
import ProjectCardContent from '../../../containers/ProjectCardContent/ProjectCardContent';
import { projects } from '../../../../constants/constants';

// Projects section on homepage
const Projects = () => {
  return (
    <Section id="projects" className="bottom-margin top-padding">
      <h2 className="section__title">Projects</h2>
      <Grid>
        {projects.map((project, i) => {
          return (
            <Card
              key={`project-card-${i}`}
              withBottomGradient={true}
              withGradientBackground={false}
              withTransform={true}
            >
              <ProjectCardContent project={project} />
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Projects;
