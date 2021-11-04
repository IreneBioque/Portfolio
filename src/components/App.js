// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import WorkList from './WorkList';
import About from './About';
import Contact from './Contact';
import Technologies from './Technologies';
import WorkDetail from './WorkDetail';
import Footer from './Footer';
import PhotoProyect1 from '../images/roll-the-dices.jpg';
import PhotoProyect2 from '../images/rick-y-morty.png';
import PhotoProyect3 from '../images/serieteca.jpg';
import PhotoProyect4 from '../images/guess-the-number.jpg';
import PhotoProyect5 from '../images/web-layout.jpg';
import Data from '../data/data.json';
const App = () => {
  const RollTheDices = ['HTML', 'SCSS', 'JavaScript', 'Gulp'];
  const RickAndMorty = ['HTML', 'SCSS', 'REACT.JS'];
  const Serieteca = ['HTML', 'SCSS', 'JavaScript', 'Gulp'];
  const GuessTheNumber = ['HTML', 'SCSS', 'JavaScript'];
  const WebLayout = ['HTML', 'SCSS', 'Gulp'];
  const [data, setData] = useEffect(Data);
  console.log(data[0].id);
  return (
    <div>
      {/* <Header /> */}
      <main class='main'>
        <Switch>
          <Route path='/' exact>
            <Hero />
            <WorkList
              RollTheDices={RollTheDices}
              RickAndMorty={RickAndMorty}
              Serieteca={Serieteca}
              GuessTheNumber={GuessTheNumber}
              WebLayout={WebLayout}
              PhotoProyect1={PhotoProyect1}
              PhotoProyect2={PhotoProyect2}
              PhotoProyect3={PhotoProyect3}
              PhotoProyect4={PhotoProyect4}
              PhotoProyect5={PhotoProyect5}
            />
            <About />
            <Contact />
            <Technologies />
          </Route>
          <Route path='/proyect/rollthedices'>
            <WorkDetail
              title='Roll the Dices'
              PhotoProyect={PhotoProyect1}
              description='Este proyecto consiste en un lanzador de dados para poder jugar a rol en cualquier parte'
              tech={RollTheDices}
              github='https://github.com/IreneBioque/roll-dices'
              hrefProyect='https://irenebioque.github.io/roll-dices/'
            />
          </Route>
          <Route path='/proyect/RickandMorty'>
            <WorkDetail
              title='Rick and Morty Search Engine'
              PhotoProyect={PhotoProyect2}
              description='Este proyecto consiste en un buscador de personajes de Rick y morty.'
              tech={RickAndMorty}
              github='https://github.com/IreneBioque/Rick-and-Morty-Search-Engine'
              hrefProyect='https://irenebioque.github.io/Rick-and-Morty-Search-Engine/#/'
            />
          </Route>
          <Route path='/proyect/Serieteca'>
            <WorkDetail
              title='Serieteca'
              PhotoProyect={PhotoProyect3}
              description='Este proyecto consiste en un buscador de series.'
              tech={Serieteca}
              github='https://github.com/IreneBioque/Serieteca'
              hrefProyect='https://irenebioque.github.io/Serieteca/'
            />
          </Route>
          <Route path='/proyect/Guessthenumber'>
            <WorkDetail
              title='Guess the number'
              PhotoProyect={PhotoProyect4}
              description='Este proyecto consiste en un juego, donde tendrás que adivinar el número del 1 al 100.'
              tech={GuessTheNumber}
              github='https://github.com/IreneBioque/Guess-the-number'
              hrefProyect='https://irenebioque.github.io/Guess-the-number/'
            />
          </Route>
          <Route path='/proyect/weblayout'>
            <WorkDetail
              title='Web layout'
              PhotoProyect={PhotoProyect5}
              description='Este proyecto consiste en la maquetación de una página web, de forma responsive'
              tech={WebLayout}
              hrefGithub='https://github.com/IreneBioque/web-layout'
              hrefProyect='https://irenebioque.github.io/web-layout/'
            />
          </Route>
        </Switch>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
