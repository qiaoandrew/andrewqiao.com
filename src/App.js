import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Project from "./components/pages/Project/Project";
import Page404 from "./components/pages/404/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pethsapp" element={<Project />} />
      <Route path="/tsac-website" element={<Project />} />
      <Route path="/create-website" element={<Project />} />
      <Route path="/paradise-tower-defense" element={<Project />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
