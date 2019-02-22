import React, { Component } from 'react';
import HelloReact from './HelloReact.js'

import Tabs from './Tabs'
import './App.css';

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
        Lorem Ipsum component will go here
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
