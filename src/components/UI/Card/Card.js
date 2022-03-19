import './Card.css';

// Card to wrap content on homepage
const Card = (props) => {
  return (
    <div className="card">
      {props.children}
      <div className="card__gradient" />
    </div>
  );
};

export default Card;
