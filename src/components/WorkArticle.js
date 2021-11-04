import { useState } from 'react';
import { Link } from 'react-router-dom';
const WorkArticle = (props) => {
  const [tech, setTech] = useState('listTech');
  const technologies = props.dataProyect.tech.map((data) => {
    return <li className={tech}>{data}</li>;
  });
  const handleTech = () => {
    setTech('listTech2');
  };
  const handleTechOut = () => {
    setTech('listTech');
  };
  return (
    <article className='section__work section'>
      <Link to={`./proyect/${props.dataProyect.id}`}>
        <div class='container'>
          <h3 class='section__work--title'>{props.dataProyect.name}</h3>
          <p class='section__work--parrafo'>{props.dataProyect.about}</p>
          <img
            src={props.dataProyect.img}
            alt={props.dataProyect.name}
            class='section__work--image'
            onMouseOver={handleTech}
            onMouseLeave={handleTechOut}
          />
          <ul class='tech_over'>{technologies}</ul>
        </div>
      </Link>
    </article>
  );
};
export default WorkArticle;
