import React from 'react';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import { SpaceShuttle } from './components/atoms/SpaceShuttle';
import { PlanetWithRing } from './components/atoms/PlanetWithRing';

import './App.css';

function App() {
  let parallax;
  return (
    <main className="app">
      <Parallax scroll={false} pages={3} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer offset={0} speed={1} className="parallaxed-composition welcome-message">
          HELLO, I'M ROGOVIN PAVEL, FRONTEND DEVELOPER
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1} className="parallaxed-composition">
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
