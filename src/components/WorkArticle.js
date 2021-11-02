const WorkArticle = (props) => {
  const listTech = props.list;
  const technologies = listTech.map((data) => {
    return <li className='list__element'>{data}</li>;
  });
  return (
    <article class='section__work section'>
      <h3 class='section__work--title'>{props.title}</h3>
      <p class='section__work--parrafo'>{props.description}</p>
      <ul class='section__work--ul'>{technologies}</ul>
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
      <img
        src={props.photo}
        alt={props.altImage}
        class='section__work--image'
      />
    </article>
  );
};
export default WorkArticle;
