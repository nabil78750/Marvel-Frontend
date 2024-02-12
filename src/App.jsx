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

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || "");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comics" element={<ComicPage />} />
        <Route path="/" element={<HomePage setToken={setToken} />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/favoris" element={<FavorisPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
