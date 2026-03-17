function FooterLinksColumn({ title, links }) {
  return (
    <div className="footer__col">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinksColumn;
