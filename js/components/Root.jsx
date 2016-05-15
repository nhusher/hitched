import React from 'react';
import Cover from './Cover';
import Schedule from './Schedule';

function RootUI({ scroll, height }) {
  return (
    <div>
      <Cover scroll={scroll} height={height} />
      <Schedule scroll={scroll} height={height} />
    </div>);
}

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

