import { Fragment } from 'react';

import { EXPERIENCES } from '@/constants/experiences';
import GradientText from '@/components/typography/GradientText';
import ExperienceItem from '@/components/elements/ExperienceItem';
import ID from '@/components/navigation/ID';

export default function Experiences() {
  return (
    <section className="container mb-30 md:mb-50">
      <ID id="experiences" />
      <h2 className="mb-5 font-display text-7 font-bold md:mb-6 md:text-10">
        <GradientText>Experiences</GradientText>
      </h2>
      <div className="grid md:gap-21">
        {EXPERIENCES.map(
          ({ id, company, role, date, location, points, icon, buttons }, i) => (
            <Fragment key={id}>
              <ExperienceItem
                company={company}
                role={role}
                date={date}
                location={location}
                points={points}
                icon={icon}
                buttons={buttons}
              />
              {i !== EXPERIENCES.length - 1 && (
                <hr className="mb-6 mt-9 text-border md:hidden" />
              )}
            </Fragment>
          )
        )}
      </div>
    </section>
  );
}
