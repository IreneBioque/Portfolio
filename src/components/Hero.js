import PersonalPhoto from '../images/irene-foto.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div>
        <img src={PersonalPhoto} alt='foto Irene' className='image_about' />
      </div>

      <div>
        <h1 className='hero__title'>Irene Bioque Muñoz</h1>
        <p className='hero__paragraph anim-typewriter'>
          Desarrolladora frontend en busca de mi primer trabajo.
        </p>
      </div>
    </div>
  );
};
export default Hero;
