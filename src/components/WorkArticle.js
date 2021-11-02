import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const WorkArticle = (props) => {
  const [tech, setTech] = useState('');
  const technologies = props.list.map((data) => {
    return <span className='listTech'>{data}</span>;
  });
  const handleTech = () => {
    setTech(technologies);
  };
  const handleTechOut = () => {
    setTech('');
  };
  return (
    <article class='section__work section'>
      <h3 class='section__work--title'>{props.title}</h3>
      <p class='section__work--parrafo'>{props.description}</p>
      {/* <ul class='section__work--ul'>{technologies}</ul> */}
      <div class='section__work--links'>
        <a href={props.hrefProyect} target='_blank' rel='noreferrer'>
          Abrir proyecto
        </a>
        <a
          href={props.hrefGithub}
          title={props.title}
          target='_blank'
          rel='noreferrer'
        >
          <i class='fab fa-github'></i>
        </a>
      </div>
      <div class='container'>
        <img
          src={props.photo}
          alt={props.altImage}
          class='section__work--image'
          onMouseOver={handleTech}
          onMouseLeave={handleTechOut}
        />
        <p class='centrado'>{tech}</p>
      </div>
    </article>
  );
};
export default WorkArticle;
