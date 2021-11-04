import PersonalPhoto from '../images/IreneBioque.jpg';

const About = () => {
  return (
    <section id='about'>
      <article class='section section__about'>
        <h2 class='section__title'>Sobre mi</h2>
        <p class='section__paragraph'>
          Psicóloga de formación, decidí darle la vuelta a mi carrera
          profesional y empezar en el mundo de la programación. Disfruto
          creando, aprendiendo y formando parte de un equipo. Actualmente estoy
          buscando iniciarme profesionalmente como programadora.
        </p>
        <div>
          <img src={PersonalPhoto} alt='foto Irene' class='image_about' />
        </div>
      </article>
    </section>
  );
};
export default About;
