import React, { Component } from 'react';
import styled from 'styled-components/primitives';
import logo from './logo.svg';
import './App.css';

const Touchable = styled.Touchable``;
const View = styled.View``;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	{/* <Touchable /> */ }
	<View />
      </div>
    );
  }
}

export default App;
