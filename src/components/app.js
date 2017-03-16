import React, { Component } from 'react';
import Header from './header';
import Holes from './holes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Holes />
        <Holes />
      </div>
    );
  }
}
