import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";
import Header from "./components/hearder/Header";
import ComicPage from "./pages/comicPage/comicPage";
import HomePage from "./pages/homePage/homePage";
import CharacterPage from "./pages/characterPage/characterPage";
import FavorisPage from "./pages/favorisPage/favorisPage";
import Footer from "./components/footer/footer";
import ComicidPage from "./pages/comicidPage/comicidPage";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || "");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comics" element={<ComicPage />} />
        <Route path="/" element={<HomePage setToken={setToken} />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/favoris" element={<FavorisPage />} />
        <Route path="/comic/:id" element={<ComicidPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
