import PersonalPhoto from '../images/irene-foto.jpg';

const Hero = () => {
  return (
    <div class='hero'>
      <div>
        <img src={PersonalPhoto} alt='foto Irene' class='image_about' />
      </div>

      <div>
        <h1 class='hero__title'>Irene Bioque Muñoz</h1>
        <p class='hero__paragraph anim-typewriter'>
          Desarrolladora frontend en busca de mi primer trabajo.
        </p>
      </div>
    </div>
  );
};
export default Hero;
