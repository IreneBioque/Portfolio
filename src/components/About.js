import PersonalPhoto from '../images/IreneBioque.jpg';

const About = () => {
  return (
    <section id='about'>
      <article className='section section__about'>
        <h2 className='section__title'>Sobre mi</h2>
        <p className='section__paragraph'>
          Psicóloga de formación, decidí darle la vuelta a mi carrera
          profesional y empezar en el mundo de la programación. Disfruto
          creando, aprendiendo y formando parte de un equipo. Actualmente estoy
          buscando iniciarme profesionalmente como programadora.
        </p>
        {/* <div>
          <img src={PersonalPhoto} alt='foto Irene' className='image_about' />
        </div> */}
      </article>
    </section>
  );
};
export default About;
