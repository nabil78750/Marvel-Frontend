import "../footer/footer.css";
import marvelLogo from "../../assets/MarvelLogo.png";
import logoInsider from "../../assets/logo-marvel-insider.png";
import logUmarvel from "../../assets/logo-U-marvel.png";
import iconFacebook from "../../assets/icon-facebook.png";
import iconInsta from "../../assets/icon-insta.png";
import iconSnap from "../../assets/icon-snap.png";
import iconYoutube from "../../assets/icon-youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer-img">
        <img src={marvelLogo} />
      </div>
      <div className="container-footer-nav">
        <div className="footer-nav">
          <p>ABOUT MARVEL</p>
          <p>HELPE:FAQS</p>
          <p>INTENSHIPS</p>
          <p>CAREERS</p>
        </div>
        <div className="footer-nav">
          <p>AVERTISING</p>
          <p>DISNEY+</p>
          <p>MARVELHQ.COM</p>
          <p>REDEEM DIGITAL COMICS</p>
        </div>
        <div className="footer-nav-logo">
          <div>
            <img src={logoInsider} />
            <div>
              <p>MARVEL INSIDER</p>
            </div>
          </div>

          <div>
            <img src={logUmarvel} />
            <div className="footer-para">
              <p>MARVEL UNLIMITED</p>
            </div>
          </div>
        </div>
        <div>
          <p>FOLLOW MARVEL</p>
          <div className="footer-icon">
            <img src={iconFacebook} alt="" />
            <img src={iconInsta} alt="" />
            <img src={iconSnap} alt="" />
            <img src={iconYoutube} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
