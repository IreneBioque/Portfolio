import WorkArticle from './WorkArticle';
const WorkList = (props) => {
  return (
    <div>
      <h2 className='section__title'>Mis Proyectos</h2>
      <section id='work' className='section_proyects'>
        <WorkArticle
          photo={props.PhotoProyect1}
          title='Roll the Dices'
          description='Lanzador de dados'
          altImage='Roll the Dices Image'
          list={props.RollTheDices}
          classArticle='Roll section__work section'
          hrefLink='rollthedices'
        />
        <WorkArticle
          photo={props.PhotoProyect2}
          title='Rick and Morty Search Engine'
          description=' Buscador de personajes de la serie Rick y Morty'
          altImage='Rick and Morty Search Engine Image'
          list={props.RickAndMorty}
          classArticle='Rick section__work section'
          hrefLink='RickandMorty'
        />
        <WorkArticle
          photo={props.PhotoProyect3}
          title='Serieteca'
          description=' Buscador de series, donde puedes guardar tus series favoritas'
          altImage='Serieteca Image'
          list={props.Serieteca}
          classArticle='Serieteca section__work section'
          hrefLink='Serieteca'
        />
        <WorkArticle
          photo={props.PhotoProyect4}
          title='Guess the number'
          description='Juego en el que hay que adivinar un número del 1 al 100'
          altImage='Guess the number Image'
          list={props.GuessTheNumber}
          classArticle='Guess section__work section'
          hrefLink='Guessthenumber'
        />
        <WorkArticle
          photo={props.PhotoProyect5}
          title='Web layout'
          description=' Maquetación de una página web responsive'
          altImage='Web layout Image'
          list={props.WebLayout}
          classArticle='layout section__work section'
          hrefLink='weblayout'
        />
      </section>
    </div>
  );
};
export default WorkList;
