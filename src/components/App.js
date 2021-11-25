// Fichero src/components/App.js
import {  useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import WorkList from './WorkList';
import About from './About';
import Contact from './Contact';
import Technologies from './Technologies';
import WorkDetail from './WorkDetail';
// import Footer from './Footer';

import Data from '../data/data.json';
const App = () => {
  const [data, setData] = useState(Data);
  const datafiltered = data.proyects
    .map((data) => {
      return {
        id: data.id,
        name: data.name,
        img: data.img,
        tech: data.tech,
        about: data.about,
        github: data.github,
        page: data.page,
        description: data.descripcion,
      };
    })
    .reverse();
  const routeData = useRouteMatch('/proyect/:id');
  const ProyectId = routeData !== null ? routeData.params.id : '';
  const selectedProyect = datafiltered.find(
    (proyect) => proyect.id === parseInt(ProyectId)
  );
  return (
    <div>
      <main className='main'>
        <Switch>
          <Route path='/' exact>
            <Header />
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
