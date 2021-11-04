import { useState } from 'react';
import { Link } from 'react-router-dom';
const WorkArticle = (props) => {
  const [tech, setTech] = useState('');
  const technologies = props.list.map((data) => {
    return <li className='listTech'>{data}</li>;
  });
  const handleTech = () => {
    setTech(technologies);
  };
  const handleTechOut = () => {
    setTech('');
  };
  return (
    <article class={props.classArticle}>
      <Link to={`./proyect/${props.hrefLink}`}>
        <div class='container'>
          <h3 class='section__work--title'>{props.title}</h3>
          <p class='section__work--parrafo'>{props.description}</p>
          <img
            src={props.photo}
            alt={props.altImage}
            class='section__work--image'
            onMouseOver={handleTech}
            onMouseLeave={handleTechOut}
          />
          <ul class='centrado'>{tech}</ul>
        </div>
      </Link>
    </article>
  );
};
export default WorkArticle;
