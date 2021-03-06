import './Section.css';

// Provides margins and max-width for all the main elements
const Section = (props) => {
  return (
    <div className={`section ${props.className}`} id={props?.id}>
      {props.children}
    </div>
  );
};

export default Section;
