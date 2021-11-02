// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import logoGit from '../images/git-blanco.png';
import logoHTML from '../images/html-blanco.png';
import logoJS from '../images/js-blanco.png';
import logoNode from '../images/node-blanco.png';
import logoReact from '../images/react-blanco.png';
import logoSASS from '../images/sass-blanco.png';
import logoSQL from '../images/sql-blanco.png';
import PersonalPhoto from '../images/IreneBioque.jpg';
import PhotoProyect1 from '../images/roll-the-dices.jpg';
import PhotoProyect2 from '../images/rick-y-morty.png';
import PhotoProyect3 from '../images/serieteca.jpg';
import PhotoProyect4 from '../images/guess-the-number.jpg';
import PhotoProyect5 from '../images/web-layout.jpg';
const App = () => {
  return (
    <div>
      <header class='header'>
        <nav>
          <ul class='header__ul'>
            <li class='header__ul--li'>
              <a href='#work'>Proyectos</a>
            </li>
            <li class='header__ul--li'>
              <a href='#about'>Sobre mi</a>
            </li>
            <li class='header__ul--li'>
              <a href='#contact'>Contacto</a>
            </li>
            <li class='header__ul--li'>
              <a href='#technologies'>Tecnologías</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class='hero'>
        <h1 class='hero__title'>Irene Bioque Muñoz</h1>
        <p class='hero__paragraph'>
          Desarrolladora frontend en busca de mi primer trabajo.
        </p>
      </div>
      <main class='main'>
        {/* ***** Work *****  */}
        <section id='work'>
          <h2 class='section__title'>Mis Proyectos</h2>
          <article class='section__work section'>
            <h3 class='section__work--title'>Roll the Dices</h3>
            <p class='section__work--parrafo'>Lanzador de dados de rol</p>
            <ul class='section__work--ul'>
              <li class='section__work--ul__li'>HTML</li>
              <li class='section__work--ul__li'>SCSS</li>
              <li class='section__work--ul__li'>JavaScript</li>
              <li class='section__work--ul__li'>Gulp</li>
            </ul>
            <div class='section__work--links'>
              <a
                href='https://irenebioque.github.io/roll-dices/'
                target='_blank'
                rel='noreferrer'
              >
                Abrir proyecto
              </a>
              <a
                href='https://github.com/IreneBioque/roll-dices'
                title='Roll the dices'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-github'></i>
              </a>
            </div>
            <img
              src={PhotoProyect1}
              alt='Project 1'
              class='section__work--image'
            />
          </article>
          <article class='section__work section'>
            <h3 class='section__work--title'>Rick and Morty Search Engine</h3>
            <p class='section__work--parrafo'>
              Buscador de personajes de la serie Rick y Morty
            </p>
            <ul class='section__work--ul'>
              <li class='section__work--ul__li'>HTML</li>
              <li class='section__work--ul__li'>SCSS</li>
              <li class='section__work--ul__li'>REACT.JS</li>
            </ul>
            <div class='section__work--links'>
              <a
                href='https://irenebioque.github.io/Rick-and-Morty-Search-Engine/#/'
                target='_blank'
                rel='noreferrer'
              >
                Abrir proyecto
              </a>
              <a
                href='https://github.com/IreneBioque/Rick-and-Morty-Search-Engine'
                title='Roll the dices'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-github'></i>
              </a>
            </div>
            <img
              src={PhotoProyect2}
              alt='Project 2'
              class='section__work--image'
            />
          </article>
          <article class='section__work section'>
            <h3 class='section__work--title'>Serieteca</h3>
            <p class='section__work--parrafo'>
              Buscador de series, donde puedes guardar tus series favoritas
            </p>
            <ul class='section__work--ul'>
              <li class='section__work--ul__li'>HTML</li>
              <li class='section__work--ul__li'>SCSS</li>
              <li class='section__work--ul__li'>JavaScript</li>
              <li class='section__work--ul__li'>Gulp</li>
            </ul>
            <div class='section__work--links'>
              <a
                href='https://irenebioque.github.io/Serieteca/'
                target='_blank'
                rel='noreferrer'
              >
                Abrir proyecto
              </a>
              <a
                href='https://github.com/IreneBioque/Serieteca'
                title='Serieteca'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-github'></i>
              </a>
            </div>
            <img
              src={PhotoProyect3}
              alt='Project 3'
              class='section__work--image'
            />
          </article>
          <article class='section__work section'>
            <h3 class='section__work--title'>Guess the number</h3>
            <p class='section__work--parrafo'>
              Juego en el que hay que adivinar un número del 1 al 100
            </p>
            <ul class='section__work--ul'>
              <li class='section__work--ul__li'>HTML</li>
              <li class='section__work--ul__li'>SCSS</li>
              <li class='section__work--ul__li'>JavaScript</li>
            </ul>
            <div class='section__work--links'>
              <a
                href='https://irenebioque.github.io/Guess-the-number/'
                target='_blank'
                rel='noreferrer'
              >
                Abrir proyecto
              </a>
              <a
                href='https://github.com/IreneBioque/Guess-the-number'
                title='guess-the-number'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-github'></i>
              </a>
            </div>
            <img
              src={PhotoProyect4}
              alt='Project 4'
              class='section__work--image'
            />
          </article>
          <article class='section__work section'>
            <h3 class='section__work--title'>Web layout</h3>
            <p class='section__work--parrafo'>
              Maquetación de una página web responsive
            </p>
            <ul class='section__work--ul'>
              <li class='section__work--ul__li'>HTML</li>
              <li class='section__work--ul__li'>SCSS</li>
              <li class='section__work--ul__li'>Gulp</li>
            </ul>
            <div class='section__work--links'>
              <a
                href='https://irenebioque.github.io/web-layout/'
                target='_blank'
                rel='noreferrer'
              >
                Abrir proyecto
              </a>
              <a
                href='https://github.com/IreneBioque/web-layout'
                title='guess-the-number'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-github'></i>
              </a>
            </div>
            <img
              src={PhotoProyect5}
              alt='Project 5'
              class='section__work--image'
            />
          </article>
        </section>

        {/* ***** About *****  */}

        <section id='about'>
          <article class='section section__about'>
            <h2 class='section__title'>Sobre mi</h2>
            <p class='section__paragraph'>
              Psicóloga de formación, decidí darle la vuelta a mi carrera
              profesional y empezar en el mundo de la programación. Disfruto
              creando, aprendiendo y formando parte de un equipo. Actualmente
              estoy buscando iniciarme profesionalmente como programadora.
            </p>
            <div>
              <img src={PersonalPhoto} alt='foto Irene' class='image_about' />
            </div>
          </article>
        </section>
        {/*  ***** Contact *****  */}

        <section id='contact'>
          <article class='section'>
            <h2 class='section__title'>Contacto</h2>
            <p class='section__paragraph'>
              Si quieres contactar conmigo, tienes mi correo y todas mis redes
              sociales abajo.
            </p>
            <ul class='contact_ul'>
              <li class='contact_ul--li'>
                <a
                  href='mailto:irenebioque@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='far fa-envelope'></i>
                </a>
              </li>
              <li class='contact_ul--li'>
                <a
                  href='https://github.com/IreneBioque'
                  title='Link to Github Profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  <i class='fab fa-github'></i>
                </a>
              </li>
              <li class='contact_ul--li'>
                <a
                  href='https://www.linkedin.com/in/irenebioquemu%C3%B1oz/'
                  title='Link to Linkedin Profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fab fa-linkedin'></i>
                </a>
              </li>
              <li class='contact_ul--li'>
                <a
                  href='https://twitter.com/Irenillab'
                  title='Link to Twitter Profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  <i class='fab fa-twitter'></i>
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section id='technologies'>
          <h2 class='section__title technologies__title'>Tecnologías</h2>
          <ul class='technologies'>
            <li>
              <img src={logoSASS} alt='SCSS' class='tech_img sass' />
            </li>
            <li>
              <img src={logoHTML} alt='HTML' class='tech_img html' />
            </li>
            <li>
              <img src={logoJS} alt='JS' class='tech_img js' />
            </li>
            <li>
              <img src={logoReact} alt='REACT' class='tech_img react' />
            </li>
            <li>
              <img src={logoGit} alt='GIT' class='tech_img git' />
            </li>
            <li>
              <img src={logoNode} alt='NODE' class='tech_img node' />
            </li>
            <li>
              <img src={logoSQL} alt='SQL' class='tech_img sql' />
            </li>
          </ul>
        </section>
      </main>
      <footer class='footer'>
        <a href='#top' class='back-to-top' title='Back to Top'>
          <i class='far fa-arrow-alt-circle-up'></i>
        </a>
        <p>&copy; Irene Bioque Muñoz 2021</p>
      </footer>
    </div>
  );
};

export default App;
