import React from 'react';

export default function Schedule() {
  return (<section id="schedule">
    <h2>Schedule for the weekend</h2>

    <ol className="at-a-glance">
      <li>
        <h4>4pm</h4>
        <h5>Cocktails</h5>
        <p>in the garden</p>
      </li>
      <li>
        <h4>5pm</h4>
        <h5>Ceremony</h5>
      </li>
      <li>
        <h4>6pm</h4>
        <h5>Dinner</h5>
        <p>cash bar after 7pm</p>
      </li>
    </ol>

    <h2>Staying at the Inn?</h2>
    <ol className="days">
      <li className="friday">
        <h3>Friday <i>8th</i></h3>
        <ol className="day">
          <li className="guests">
            <strong>3pm</strong>
            <p>Guests may check into the inn</p>
          </li>
          <li className="guests">
            <strong>6pm</strong>
            <p>
              Friday Dinner
              <i>BYOB</i>
            </p>
          </li>
          <li className="guests">
            <strong>8pm</strong>
            <p>
              Board games and carrying on
            </p>
          </li>
        </ol>
      </li>
      <li className="saturday">
        <h3>Saturday <i>9th</i></h3>
        <ol className="day">
          <li className="guests">
            <strong>8am-8:30am</strong>
            <p>Breakfast</p>
          </li>
          <li className="guests">
            <strong>9am-4pm</strong>
            <p>Go have fun!</p>
          </li>
          <li className="everyone">
            <strong>4pm</strong>
            <p>Cocktails in the garden</p>
          </li>
          <li className="everyone">
            <strong>5pm</strong>
            <p>Ceremony</p>
          </li>
          <li className="everyone">
            <strong>6pm</strong>
            <p>
              Dinner
              <i>Cash bar after 7</i>
            </p>
          </li>
          <li className="everyone">
            <strong>8pm</strong>
            <p>
              After-dinner amusements
            </p>
          </li>
        </ol>
      </li>
      <li className="sunday">
        <h3>Sunday <i>10th</i></h3>
        <ol className="day">
          <li className="guests">
            <strong>8:30am-9am</strong> Breakfast
          </li>
          <li className="guests">
            <strong>11am</strong> Check-out
          </li>
        </ol>
      </li>
    </ol>
  </section>);
}
