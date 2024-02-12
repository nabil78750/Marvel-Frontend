import marvelLogo from "../../assets/MarvelLogo.png";
import "../hearder/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container-img">
        <img src={marvelLogo} />
      </div>

      <div className="header-nav">
        <Link className="header-link" to="/">
          PERSONNAGES
        </Link>
        <Link className="header-link" to="/comics">
          COMICS
        </Link>
        <Link className="header-link" to="/favoris">
          FAVORIS
        </Link>
      </div>
    </header>
  );
};
export default Header;
