import React from 'react';

const API_KEY = 'AIzaSyA-ZBKPhHjwWy_m-ugn06lKV5GbOrBM0Ok';
const BLUEBERRY_PLACE_ID = 'ChIJEUzdOpNHtUwRbQAI_K6QbLM';
const NORTH_PLACE_ID = 'ChIJ5VWbtlV6ykwRjkkOchnlX8M';
const FROM_NORTH_MAPS_LINK = 'http://goo.gl/13SD9c';
const FROM_SOUTH_MAPS_LINK = 'http://goo.gl/Vzi85T';
const PRINTABLE_LINK = '/directions.pdf';

const latLng = (lat, lng) => new google.maps.LatLng(lat, lng);
const waypoint = (lat, lng) => ({ location: latLng(lat, lng) });

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
      <div className="artifacts">
        <a className="google-maps-link" href={FROM_NORTH_MAPS_LINK}>
          Open the northern route in google maps
        </a>
        <a className="printable" href={PRINTABLE_LINK}>Download printable directions</a>
      </div>
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
      <div className="artifacts">
        <a className="google-maps-link" href={FROM_SOUTH_MAPS_LINK}>
          Open the southern route in google maps
        </a>
        <a className="printable" href={PRINTABLE_LINK}>
          Download printable directions
        </a>
      </div>
    </div>);
}

class Map extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { direction: 'north' };

    this.addMapsScriptTag();
  }
  componentWillReceiveProps({ direction }) {
    if (!this.initialized) return;
    if (direction === this.props.direction) return;

    this.configureMapForDirection(direction);
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
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;

    this.map = new google.maps.Map(this.refs.map, {
      zoom: 7,
      center: new google.maps.LatLng(43.8905611, -73.0113264),
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      rotateControl: false,
      scrollwheel: false
    });

    this.directionsDisplay.setMap(this.map);
    this.configureMapForDirection(this.state.direction);

    this.initialized = true;
  }
  configureMapForDirection(direction) {
    this.directionsService.route({
      origin: direction === 'north'
        ? { placeId: NORTH_PLACE_ID }
        : latLng(43.634224, -72.327828),
      waypoints: direction === 'south'
        ? [waypoint(43.610691, -72.972626), waypoint(43.798103, -73.086451)]
        : [],
      destination: { placeId: BLUEBERRY_PLACE_ID },
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(result);
      }
    });
  }

  render() {
    return (<div className="map-block" ref="map"></div>);
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
        <button
          className={direction === 'north' ? 'active' : ''}
          onClick={() => this.setState({ direction: 'north' })}
        >
          Coming from the North
        </button>
        <button
          className={direction === 'south' ? 'active' : ''}
          onClick={() => this.setState({ direction: 'south' })}
        >
          Coming from the South
        </button>
      </div>
      <div className="direction-container">
        {direction === 'north'
        ? <FromNorth />
        : <FromSouth />}
        <Map direction={this.state.direction} />
      </div>
    </section>);
  }
}
