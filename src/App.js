import React, { useEffect } from 'react';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import { SpaceShuttle } from './components/atoms/SpaceShuttle';
import { PlanetWithRing } from './components/atoms/PlanetWithRing';
import { About } from './components/templates/About';
import './App.css';

function App() {
  let parallax;

  return (
    <main className="app">
      <Parallax scroll={false} pages={1.5} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.7} className="parallaxed-composition welcome-message">
          HELLO SPACE
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={1} className="parallaxed-composition welcome-message">
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.8} className="parallaxed-composition">
          <SpaceShuttle className="app__shuttle" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.6} className="parallaxed-composition">
          <PlanetWithRing className="app__planet" />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}

export default App;
