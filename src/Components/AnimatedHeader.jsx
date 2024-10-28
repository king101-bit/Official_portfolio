// AnimatedHeader.js
import React from 'react';
import Particles from 'react-particles-js';

const AnimatedHeader = () => (
  <header className="animated-header">
    <Particles
      params={{
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 3 },
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
    <h1 style={{ position: "relative", zIndex: 1 }}>Welcome to My Portfolio</h1>
  </header>
);

export default AnimatedHeader;
