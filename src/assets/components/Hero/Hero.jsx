import "./Hero.scss";
import Container from "../Layout/Container";
import Button from "../Buttons/Buttons";

import heroImgDesktop from "../../images/image-intro-desktop.jpg";
import heroImgMibile from "../../images/image-intro-mobile.jpg";
import introLeft from "../../images/bg-pattern-intro-left-desktop.svg";
import introRight from "../../images/bg-pattern-intro-right-desktop.svg";

function Hero() {
  return (
    <section className="hero">
      <Container className="hero__inner">
        <div className="hero__content">
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button variant="light">View plans</Button>
        </div>
        <div className="hero__media">
          <img src={heroImgDesktop} alt="" className="hero__image--desktop" />
          <img src={heroImgMibile} alt="" className="hero__image--mobile" />
        </div>
      </Container>

      <img src={introLeft} alt="" className="hero__bg-left" />
      <img src={introRight} alt="" className="hero__bg-right" />
    </section>
  );
}

export default Hero;
