import "./Hero.scss";
import Container from "../Layout/Container";
import Button from "../Buttons/Buttons";

import heroImg from "../../assets/images/image-intro-desktop.jpg";
import introLeft from "../../assets/images/bg-pattern-intro-left-desktop.svg";
import introRight from "../../assets/images/bg-pattern-intro-right-desktop.svg";

function Hero() {
  return (
    <section className="hero">
      <img
        src={introLeft}
        alt=""
        className="hero__pattern hero__pattern--left"
      />
      <img
        src={introRight}
        alt=""
        className="hero__pattern hero__pattern--right"
      />

      <Container className="hero__inner">
        <div className="hero__content">
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you.
          </p>
          <Button variant="light">View plans</Button>
        </div>

        <div className="hero__image-wrap">
          <img
            src={heroImg}
            alt="Family walking together"
            className="hero__image"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
