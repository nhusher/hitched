import React from 'react';
import Cover from './Cover';
import Schedule from './Schedule';
import Directions from './Directions';

function RootUI({ scroll, height }) {
  return (
    <div>
      <Cover scroll={scroll} height={height} />
      <Schedule scroll={scroll} height={height} />
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
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ scroll: window.scrollY }));
    window.addEventListener('resize', () => this.setState({ height: window.innerHeight }));
  }
  componentWillUnmount() {
    // TODO:
    // window.removeEventListener('scroll');
  }
  render() {
    return <RootUI scroll={this.state.scroll} height={this.state.height} />;
  }
}

