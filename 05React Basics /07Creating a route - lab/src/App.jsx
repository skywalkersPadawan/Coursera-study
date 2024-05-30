import './App.css';
import Homepage from './Homepage';
import AboutLittleLemon from './AboutLittleLemon';
import { Routes, Route, Link } from 'react-router-dom';
/* this lab work is not completed for now */

function App() {
  return (
    <div>
      <nav>
        <Link
          to="/"
          className="nav-item">
          Homepage
        </Link>
        <Link
          to="/about"
          className="nav-item">
          About Little Lemon
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}></Route>
        <Route
          path="/about"
          element={<AboutLittleLemon />}></Route>
      </Routes>
    </div>
  );
}

export default App;
