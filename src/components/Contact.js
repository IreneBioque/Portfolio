const Contact = () => {
  return (
    <section id="contact">
      <article className="section">
        <h2 className="section__title">Contacto</h2>
        <p className="section__paragraph">
          Si quieres contactar conmigo, tienes mi correo y todas mis redes
          sociales abajo.
        </p>
        <ul className="contact_ul">
          <li className="contact_ul--li">
            <a
              href="mailto:irenebioque@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li className="contact_ul--li">
            <a
              href="https://github.com/IreneBioque"
              title="Link to Github Profile"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="contact_ul--li">
            <a
              href="https://www.linkedin.com/in/irenebioque/"
              title="Link to Linkedin Profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="contact_ul--li">
            <a
              href="https://twitter.com/BioqueDev"
              title="Link to Twitter Profile"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
export default Contact;
