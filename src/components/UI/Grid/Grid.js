import './Grid.css';

// Grid for cards on homepage
const Grid = (props) => {
  return <div className="grid">{props.children}</div>;
};

export default Grid;
