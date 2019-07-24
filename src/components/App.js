import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publication from '../publications.json';

class App extends Component {
  state = {};

  render() {
    return <Reader items={publication} />;
  }
}

export default App;
