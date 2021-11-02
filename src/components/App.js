// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import WorkList from './WorkList';
import About from './About';
import Contact from './Contact';
import Technologies from './Technologies';
import Footer from './Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Hero />

      <main class='main'>
        {/* ***** Work *****  */}
        <WorkList />
        {/* ***** About *****  */}
        <About />
        {/*  ***** Contact *****  */}
        <Contact />
        {/*  ***** Technologies *****  */}
        <Technologies />
      </main>
      <Footer />
    </div>
  );
};

export default App;
