import "./Footer.scss";
import Container from "../Layout/Container";
import footerLinks from "../../data/footerLinks";
import FooterLinksColumn from "./FooterLinksColumn";

import logo from "../../assets/images/logo.svg";
import bgFooter from "../../assets/images/bg-pattern-footer-desktop.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={bgFooter} alt="" className="footer__bg" />
      <Container>
        <div className="footer__top">
          <img src={logo} alt="Insure logo" />
          <div className="footer__socials">
            <a href="#">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={iconTwitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={iconPinterest} alt="Pinterest" />
            </a>
            <a href="#">
              <img src={iconInstagram} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer__line" />

        <div className="footer__grid">
          {footerLinks.map((col) => (
            <FooterLinksColumn key={col.title} {...col} />
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
