import { Link } from 'react-router-dom';
import '../styles/layout/_workDetail.scss';
const WorkDetail = (props) => {
  const technologies = props.tech.map((data) => {
    return <li>{data}</li>;
  });
  return (
    <div className='detail'>
      <h1 className='titleDetail'>{props.title}</h1>
      <Link to='/'>
        <p className='Link'>
          <i class='fas fa-arrow-left arrow'></i>Volver atrás
        </p>
      </Link>
      <a
        className='LinkProyect'
        href={props.hrefProyect}
        target='_blank'
        rel='noreferrer'
      >
        Ir al sitio web
      </a>
      <div className='workDetail'>
        <img
          src={props.PhotoProyect}
          alt={props.title}
          className='workDetail__image'
        />
        <h3 className='workDetail__title'>Sobre este proyecto</h3>
        <p className='workDetail__paragraph'>{props.description}</p>
        <h3 className='workDetail__title'>Tecnologías</h3>
        <ul className='workDetail__list'>{technologies}</ul>
        <h3 className='workDetail__title'>Github</h3>
        <p className='workDetail__paragraph'>
          Si quieres colaborar, darme alguna idea, ver el código del proyecto te
          dejo aquí el enlace a Github ¡Gracias!
        </p>
        <a
          className='workDetail__link'
          href={props.github}
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
