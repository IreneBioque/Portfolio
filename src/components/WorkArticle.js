import { useState } from 'react';

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
    <article class={props.classArticle}>
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
        <p class='centrado'>{tech}</p>
      </div>
    </article>
  );
};
export default WorkArticle;
