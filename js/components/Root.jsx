import React from 'react';
import Cover from './Cover';
import Schedule from './Schedule';
import Directions from './Directions';
import Registry from './Registry';
import Nearby from './Nearby';

function RootUI({ scroll, height }) {
  return (
    <div>
      <Cover />
      <Schedule />
      <Directions />
      <Registry />
      <Nearby />
    </div>);
}

RootUI.propTypes = {
  height: React.PropTypes.number,
  scroll: React.PropTypes.number
};

export default class Root extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      scroll: window.scrollY,
      height: window.innerHeight
    };
    this.scrollListener = () => this.setState({ scroll: window.scrollY });
    this.resizeListener = () => this.setState({ height: window.innerHeight });
  }
  componentDidMount() {
    // Not using scroll events:
    //window.addEventListener('scroll', this.scrollListener);
    //window.addEventListener('resize', this.resizeListener);
  }
  componentWillUnmount() {
    //window.removeEventListener('scroll', this.scrollListener);
    //window.removeEventListener('resize', this.resizeListener);
  }
  render() {
    return <RootUI scroll={this.state.scroll} height={this.state.height} />;
  }
}

