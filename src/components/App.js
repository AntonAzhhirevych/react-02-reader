import React, { Component } from 'react';
import Reader from '../components/Reader/Reader';
import publication from '../publications.json';

class App extends Component {
  state = {};
  render() {
    console.log(publication);
    return <Reader items={publication} />;
  }
}

export default App;
