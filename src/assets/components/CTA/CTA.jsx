import "./CTA.scss";
import Container from "../Layout/Container";
import Button from "../Buttons/Buttons";
import bgHowWork from "../../assets/images/bg-pattern-how-we-work-desktop.svg";

function CTA() {
  return (
    <section className="cta">
      <Container className="cta__inner">
        <h2>Find out more about how we work</h2>
        <Button variant="light">How we work</Button>
        <img src={bgHowWork} alt="" className="cta__bg" />
      </Container>
    </section>
  );
}

export default CTA;
