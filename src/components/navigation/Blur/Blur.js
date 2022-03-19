import './Blur.css';

// Blur to hide page elements when menu shows
const Blur = (props) => {
  return <div className="blur" onClick={props.toggleMenu} />;
};

export default Blur;
