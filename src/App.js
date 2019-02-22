import React, { Component } from 'react';
import HelloReact from './Components/HelloReact.js'

import Tabs from './Components/Tabs'
import './App.css';
import LoremIpsum from './Components/LoremIpsum.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Making some tabs</h1>
      <Tabs>
        <div label="Hello React">
        <HelloReact/>
        </div>
        <div label="Lorem Ipsum">
        <LoremIpsum/>
        </div>
        <div label="Login Form">
        Login Form component will go here
        </div>
      </Tabs>
        
      </div>
    );
  }
}

export default App;
