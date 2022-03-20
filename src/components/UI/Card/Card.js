import './Card.css';

// Card to wrap content on homepage
const Card = (props) => {
  return (
    <div
      className={`card ${
        props.withGradientBackground ? 'card--gradient-background' : ''
      } ${!props.withTransform ? 'card--no-transform' : ''}`}
    >
      {props.children}
      {props.withBottomGradient === true ? (
        <div className="card__gradient" />
      ) : null}
    </div>
  );
};

export default Card;
