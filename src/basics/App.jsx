import "./App.css";
import NavBar from "../components/navBar.jsx";
import Home from "../Pages/home.jsx";
import Favorites from "../Pages/favorites.jsx";
import { Routes, Route } from "react-router-dom";

import { MovieProvider } from "../context/movieContext.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar   />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/nav" element={<NavBar />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
