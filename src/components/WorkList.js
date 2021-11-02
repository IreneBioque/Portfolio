import PhotoProyect1 from '../images/roll-the-dices.jpg';
import PhotoProyect2 from '../images/rick-y-morty.png';
import PhotoProyect3 from '../images/serieteca.jpg';
import PhotoProyect4 from '../images/guess-the-number.jpg';
import PhotoProyect5 from '../images/web-layout.jpg';
import WorkArticle from './WorkArticle';
const WorkList = () => {
  const RollTheDices = ['HTML', 'SCSS', 'JavaScript', 'Gulp'];
  const RickAndMorty = ['HTML', 'SCSS', 'REACT.JS'];
  const Serieteca = ['HTML', 'SCSS', 'JavaScript', 'Gulp'];
  const GuessTheNumber = ['HTML', 'SCSS', 'JavaScript'];
  const WebLayout = ['HTML', 'SCSS', 'Gulp'];
  return (
    <div>
      <h2 className='section__title'>Mis Proyectos</h2>
      <section id='work' className='section_proyects'>
        <WorkArticle
          photo={PhotoProyect1}
          title='Roll the Dices'
          description='Lanzador de dados'
          hrefProyect='https://irenebioque.github.io/roll-dices/'
          hrefGithub='https://github.com/IreneBioque/roll-dices'
          altImage='Roll the Dices Image'
          list={RollTheDices}
          classArticle='Roll section__work section'
        />
        <WorkArticle
          photo={PhotoProyect2}
          title='Rick and Morty Search Engine'
          description=' Buscador de personajes de la serie Rick y Morty'
          hrefProyect='https://irenebioque.github.io/Rick-and-Morty-Search-Engine/#/'
          hrefGithub='https://github.com/IreneBioque/Rick-and-Morty-Search-Engine'
          altImage='Rick and Morty Search Engine Image'
          list={RickAndMorty}
          classArticle='Rick section__work section'
        />
        <WorkArticle
          photo={PhotoProyect3}
          title='Serieteca'
          description=' Buscador de series, donde puedes guardar tus series favoritas'
          hrefProyect='https://irenebioque.github.io/Serieteca/'
          hrefGithub='https://github.com/IreneBioque/Serieteca'
          altImage='Serieteca Image'
          list={Serieteca}
          classArticle='Serieteca section__work section'
        />
        <WorkArticle
          photo={PhotoProyect4}
          title='Guess the number'
          description='Juego en el que hay que adivinar un número del 1 al 100'
          hrefProyect='https://irenebioque.github.io/Guess-the-number/'
          hrefGithub='https://github.com/IreneBioque/Guess-the-number'
          altImage='Guess the number Image'
          list={GuessTheNumber}
          classArticle='Guess section__work section'
        />
        <WorkArticle
          photo={PhotoProyect5}
          title='Web layout'
          description=' Maquetación de una página web responsive'
          hrefProyect='https://irenebioque.github.io/web-layout/'
          hrefGithub='https://github.com/IreneBioque/web-layout'
          altImage='Web layout Image'
          list={WebLayout}
          classArticle='layout section__work section'
        />
      </section>
    </div>
  );
};
export default WorkList;
