import "./CTA.scss";
import Container from "../Layout/Container";
import Buttons from "../Buttons/Buttons";
import bgHowWork from "../../images/bg-pattern-how-we-work-desktop.svg";

function CTA() {
  return (
    <section className="cta">
      <Container className="cta__inner">
        <h2>Find out more about how we work</h2>
        <Buttons variant="light">How we work</Buttons>
        <img src={bgHowWork} alt="" className="cta__bg" />
      </Container>
    </section>
  );
}

export default CTA;
