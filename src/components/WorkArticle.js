import { useState } from 'react';
import { Link } from 'react-router-dom';
const WorkArticle = (props) => {
  // const [tech, setTech] = useState('');
  // const technologies = props.list.map((data) => {
  //   return <li className='listTech'>{data}</li>;
  // });
  // const handleTech = () => {
  //   setTech(technologies);
  // };
  // const handleTechOut = () => {
  //   setTech('');
  // };
  return (
    <article class={props.classArticle}>
      <Link to={`./proyect/${props.dataProyect.id}`}>
        <div class='container'>
          <h3 class='section__work--title'>{props.dataProyect.name}</h3>
          <p class='section__work--parrafo'>{props.dataProyect.about}</p>
          <img
            src={props.dataProyect.img}
            alt={props.dataProyect.name}
            class='section__work--image'
            // onMouseOver={handleTech}
            // onMouseLeave={handleTechOut}
          />
          <ul class='centrado'>{props.dataProyect.tech}</ul>
        </div>
      </Link>
    </article>
  );
};
export default WorkArticle;
