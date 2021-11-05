const Contact = () => {
  return (
    <section id='contact'>
      <article class='section'>
        <h2 class='section__title'>Contacto</h2>
        <p class='section__paragraph'>
          Si quieres contactar conmigo, tienes mi correo y todas mis redes
          sociales abajo.
        </p>
        <ul class='contact_ul'>
          <li class='contact_ul--li'>
            <a
              href='mailto:irenebioque@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <i class='far fa-envelope'></i>
            </a>
          </li>
          <li class='contact_ul--li'>
            <a
              href='https://github.com/IreneBioque'
              title='Link to Github Profile'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <i class='fab fa-github'></i>
            </a>
          </li>
          <li class='contact_ul--li'>
            <a
              href='https://www.linkedin.com/in/irenebioque/'
              title='Link to Linkedin Profile'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li class='contact_ul--li'>
            <a
              href='https://twitter.com/Irenillab'
              title='Link to Twitter Profile'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <i class='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
export default Contact;
