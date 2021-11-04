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
  const [data, setData] = useState(Data);
  const datafiltered = data.proyects.map((data) => {
    return {
      id: data.id,
      name: data.name,
      img: data.img,
      tech: data.tech,
      about: data.about,
      github: data.github,
      page: data.page,
      class: data.class,
    };
  });
  const routeData = useRouteMatch('/proyect/:id');
  const ProyectId = routeData !== null ? routeData.params.id : '';
  const selectedProyect = datafiltered.find(
    (proyect) => proyect.id === parseInt(ProyectId)
  );
  console.log('Esto es selected proyect', selectedProyect);
  return (
    <div>
      {/* <Header /> */}
      <main class='main'>
        <Switch>
          <Route path='/' exact>
            <Hero />
            <WorkList data={datafiltered} />
            <About />
            <Contact />
            <Technologies />
          </Route>

          <Route path='/proyect/:id'>
            <section className='characterDetail'>
              <WorkDetail proyect={selectedProyect} />
            </section>
          </Route>
        </Switch>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
