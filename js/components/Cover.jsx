import React from 'react';
import { Motion, spring } from 'react-motion';

export default function Cover({ scroll, height }) {
  let springs = {
    offset: spring(0, { stiffness: 50, damping: 12 }),
    opacity: spring(1, { stiffness: 60 })
  };

  return (
    <header>
      <Motion defaultStyle={{ offset: -100, opacity: 0 }} style={springs}>
        {s => (
          <h1 style={{ transform: `translateY(${s.offset}px)`, opacity: s.opacity }}>
            <span>Sia Vissering</span> <em>&</em> <span>Nick Husher</span>
          </h1>)}
      </Motion>
      <Motion defaultStyle={{ opacity: 0 }} style={springs}>
        {s => (
          <p className="date" style={{ opacity: s.opacity * 0.8 }}>
            <time dateTime="2016-07-09">July 9th, 2016</time>
          </p>
        )}
      </Motion>

      <Motion defaultStyle={{ offset: 20, opacity: 0 }} style={springs}>
        {s => (
          <nav style={{ transform: `translateY(${s.offset}px)`, opacity: s.opacity }}>
            <ul>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#directions">Directions</a></li>
              <li><a href="#registry">Registry</a></li>
              <li><a href="#nearby">Nearby</a></li>
            </ul>
          </nav>)}
      </Motion>

      <p className="next">
        <a href="#schedule">
          <img src="./images/chevron.svg" alt="next" />
        </a>
      </p>
    </header>);
}

Cover.propTypes = {
  height: React.PropTypes.number,
  scroll: React.PropTypes.number
};