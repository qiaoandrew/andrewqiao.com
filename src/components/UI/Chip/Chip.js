import './Chip.css';

const Chip = (props) => {
  return (
    <div className="chip">
      <p className="chip__text">{props.children}</p>
    </div>
  );
};

export default Chip;
