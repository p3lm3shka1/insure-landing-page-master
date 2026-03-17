import { useState } from "react";
import "./Navbar.scss";

import logo from "../../images/logo.svg";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";
import mobilePattern from "../../images/bg-pattern-mobile-nav.svg";

const navLinks = ["How we work", "Blog", "Account"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <img src={logo} alt="Insure" className="navbar__logo" />

        <nav className="navbar__desktop">
          {navLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
          <button className="btn btn--dark">View plans</button>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <img src={isOpen ? iconClose : iconHamburger} alt="" />
        </button>
      </div>

      {isOpen && (
        <div className="navbar__mobile-menu">
          <nav className="navbar__mobile-menu__links">
            {navLinks.map((link) => (
              <a key={link} href="#" onClick={() => setIsOpen(false)}>
                {link}
              </a>
            ))}
            <button className="btn btn--light">View plans</button>
          </nav>
          <img
            src={mobilePattern}
            alt=""
            className="navbar__mobile-menu__pattern"
          />
        </div>
      )}
    </header>
  );
}
