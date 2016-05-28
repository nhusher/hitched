import React from 'react';

const API_KEY = 'AIzaSyA-ZBKPhHjwWy_m-ugn06lKV5GbOrBM0Ok';

function FromNorth() {
  return (
    <div className="directions-block">
      <h3>Arriving from the north</h3>
      <p>
        Take this route if you are approaching the Inn from the north. The route begins in
        Burlington and will take about an hour and 25 minutes. Cellular signal is limited
        in the Green Mountains, so plan ahead and preload your route into your smartphone
        or GPS.
      </p>
      <ol>
        <li>Take Shelburne Road / US Route 7 south from Burlington</li>
        <li>Remain on US Route 7 for about 35 miles through Middlebury</li>
        <li>3 miles south of Middlebury, turn left onto VT Route 125</li>
        <li>Remain on VT Route 125 for about 5 miles through Ripton</li>
        <li>Turn right onto Goshen Rd.</li>
        <li>Blueberry Hill Inn will be 2.3 miles on the left</li>
      </ol>
    </div>);
}

function FromSouth() {
  return (
    <div className="directions-block">
      <h3>Arriving from the south</h3>
      <p>
        Take this route if you are appraching from the south on I-89. It will take about an hour
        and 45 minutes to arrive at the Inn. Cellular signal is limited in the Green Mountains, so
        plan ahead and preload your route into your smartphone or GPS.
      </p>
      <ol>
        <li>After crossing from New Hampshire to Vermont, take Vermont Exit 1 to US Route 4</li>
        <li>Remain on US Route 4 for about 40 miles to downtown Rutland</li>
        <li>In Rutland, take a right onto N. Main St. / US Route 7 north</li>
        <li>Stay on US Route 7 for 15 miles to Brandon</li>
        <li>Take a sharp right onto Park St. / VT Route 73</li>
        <li>Continue on VT Route 73 for 4 miles</li>
        <li>Turn left onto Town Hill Road</li>
        <li>Turn left onto Carlisle Hill Rd.</li>
        <li>Carlisle Hill Rd. will become Goshen-Ripton Rd.</li>
        <li>Blueberry Hill Inn will be 1.3 miles on the right</li>
      </ol>
    </div>);
}

class Map extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { direction: 'north' };

    this.addMapsScriptTag();
  }
  addMapsScriptTag() {
    if (window.google) {
      this.initMaps();
      return;
    } else {
      window.__mapLoadComplete = () => {
        this.initMap();
        delete window.__mapLoadComplete;
      };

      const el = document.createElement('script');
      el.defer = true;
      el.async = true;
      el.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=__mapLoadComplete`;
      document.body.appendChild(el);
    }
  }
  initMap() {
    console.log("MAPS READY");
  }
  render() {
    return (<div ref="map">{this.props.direction}</div>);
  }
}

export default class Directions extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { direction: 'north' };
  }

  render() {
    const { direction } = this.state;
    return (<section id="directions">
      <h2>Directions</h2>
      <div className="inputs">
        <button onClick={() => this.setState({ direction: 'north' })}>
          Coming from the North
        </button>
        <button onClick={() => this.setState({ direction: 'south' })}>
          Coming from the South
        </button>
      </div>
      {direction === 'north'
      ? <FromNorth />
      : <FromSouth />}
      <Map direction={this.state.direction} />
    </section>);
  }
}
