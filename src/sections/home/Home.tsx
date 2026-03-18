import React from 'react';
import Main from './Main';
import About from './About';
import Timeline from './Timeline';
import Offerts from './Offerts';
import Sales from './Sales';
import Carrousel from './Carrousel';

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <Main />
      <About />
      <Timeline />
      <Offerts />
      <Sales />
      <Carrousel />
    </div>
  );
};

export default Home;

