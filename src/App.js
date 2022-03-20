import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Project from './components/pages/Project/Project';
import Page404 from './components/pages/404/404';
import { projects } from './constants/constants';

function App() {
  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setViewportHeight();
  window.onresize = setViewportHeight;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {projects.map((project, i) => {
        return (
          <Route
            key={`project-page-${i}`}
            path={project.route}
            element={<Project project={project} />}
          />
        );
      })}
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
