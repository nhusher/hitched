import React from 'react';
import { Motion, spring } from 'react-motion';

export default function Schedule({ scroll, height }) {
  let springs = {
    offset:  spring(0, { stiffness: 50, damping: 12 }),
    opacity: spring(1, { stiffness: 60 })
  };

  return (<section id="schedule">
    <h2>Schedule for the weekend</h2>

    <h3>At a glance</h3>
    <ol className="at-a-glance">
      <li>4pm cocktails in the garden</li>
      <li>5pm ceremony</li>
      <li>6pm dinner (cash bar after 7pm)</li>
    </ol>

    <ol className="days">
      <li className="friday">
        <h3>Friday <i>8th</i></h3>
        <ol className="day">
          <li className="guests">
            <strong>5pm</strong>
            Out of town guests may check into the inn
          </li>
          <li className="guests">
            <strong>6pm</strong>
            "Rehearsal Dinner" (byob)
          </li>
          <li className="guests">
            <strong>8pm</strong>
            Board games and carrying on
          </li>
        </ol>
      </li>
      <li className="saturday">
        <h3>Saturday <i>9th</i></h3>
        <ol className="day">
          <li className="guests">
            <strong>9am-??am</strong> Breakfast
          </li>
          <li className="guests">
            <strong>??am-4pm</strong> Go have fun!
          </li>
          <li className="everyone">
            <strong>4pm</strong> Cocktails in the garden
          </li>
          <li className="everyone">
            <strong>5pm</strong> Ceremony
          </li>
          <li className="everyone">
            <strong>6pm</strong> Dinner
            cash bar after 7
          </li>
          <li className="everyone">
            <strong>8pm</strong> After-dinner amusements
          </li>
        </ol>
      </li>
      <li className="sunday">
        <h3>Sunday <i>10th</i></h3>
        <ol className="day">
          <li className="guests">
            <strong>9am-??am</strong> Breakfast
          </li>
          <li className="guests">
            <strong>11</strong> Check-out
          </li>
        </ol>
      </li>
    </ol>
  </section>);
}

Schedule.propTypes = {
  height: React.PropTypes.number,
  scroll: React.PropTypes.number
};