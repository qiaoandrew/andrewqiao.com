import { Fragment, useEffect } from 'react';
import Nav from '../../navigation/Nav/Nav';
import Button from '../../UI/Button/Button';
import Waves from '../../UI/Waves/Waves';
import './404.css';

// 404 page
const Page404 = () => {
  useEffect(() => {
    document.body.classList.add('no-scrolling');

    return () => {
      document.body.classList.remove('no-scrolling');
    };
  }, []);

  return (
    <Fragment>
      <Nav />
      <div className="page404">
        <h1 className="page404__title">404</h1>
        <p className="page404__description">Looks like you got lost! :(</p>
        <Button isLink={true} link="/" newPage={false}>
          Go Home
        </Button>
      </div>
      <Waves />
    </Fragment>
  );
};

export default Page404;
