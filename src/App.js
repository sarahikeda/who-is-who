import React, { Component } from 'react';
import Member from './Member.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meet Our Team</h2>
        </div>

        <div class="directory"> 
          <Member/>
          <Member/>
          <Member/> 
          <Member/> 
          <Member/> 
          <Member/>
        </div>
      </div>
    )
  }
}

export default App;
