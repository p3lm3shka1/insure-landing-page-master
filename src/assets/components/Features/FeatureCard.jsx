function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
