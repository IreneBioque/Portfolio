import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/layout/_workDetail.scss';
import PhotoProyect1 from '../images/roll-the-dices.jpg';
import PhotoProyect2 from '../images/rick-y-morty.png';
import PhotoProyect3 from '../images/serieteca.jpg';
import PhotoProyect4 from '../images/guess-the-number.jpg';
import PhotoProyect5 from '../images/web-layout.jpg';
const WorkDetail = (props) => {
  const technologies = props.proyect.tech.map((data) => {
    return <li>{data}</li>;
  });
  // const [image, setImage] = useState('');
  // if (props.proyect.id === 1) {
  //   setImage(PhotoProyect1);
  // } else if (props.proyect.id === 2) {
  //   setImage(PhotoProyect2);
  // } else if (props.proyect.id === 3) {
  //   setImage(PhotoProyect3);
  // } else if (props.proyect.id === 4) {
  //   setImage(PhotoProyect4);
  // } else if (props.proyect.id === 5) {
  //   setImage(PhotoProyect5);
  // } else {
  //   setImage('');
  // }
  return (
    <div className='detail' key={props.proyect.id}>
      <h1 className='titleDetail'>{props.proyect.name}</h1>
      <Link to='/'>
        <p className='Link'>
          <i class='fas fa-arrow-left arrow'></i>Volver atrás
        </p>
      </Link>
      <a
        className='LinkProyect'
        href={props.proyect.page}
        target='_blank'
        rel='noreferrer'
      >
        Ir al sitio web
      </a>
      <div className='workDetail'>
        <img
          src={props.proyect.img}
          alt={props.title}
          className='workDetail__image'
        />
        <h3 className='workDetail__title'>Sobre este proyecto</h3>
        <p className='workDetail__paragraph'>{props.proyect.about}</p>
        <h3 className='workDetail__title'>Tecnologías</h3>
        <ul className='workDetail__list'>{technologies}</ul>
        <h3 className='workDetail__title'>Github</h3>
        <p className='workDetail__paragraph'>
          Si quieres colaborar, darme alguna idea, ver el código del proyecto te
          dejo aquí el enlace a Github ¡Gracias!
        </p>
        <a
          className='workDetail__link'
          href={props.proyect.github}
          target='_blank'
          rel='noreferrer'
        >
          <i class='fab fa-github'></i>
        </a>
      </div>
    </div>
  );
};
export default WorkDetail;
