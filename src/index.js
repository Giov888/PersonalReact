import React from 'react';
import { createRoot } from "react-dom/client";
import { Homepage,AboutMe,Portfolio } from './components';
import {BrowserRouter, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <nav className="links">
        <Link to="/">Homepage</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );

}

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />);

export default App;





