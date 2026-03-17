import "./Features.scss";
import Container from "../Layout/Container";
import features from "../../Data/Features";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <Container>
        <h2>We’re different</h2>
        <div className="features__grid">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
