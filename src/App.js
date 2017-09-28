import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Link to="/"><Button>Home Page</Button></Link>
        <Link to="/edit"><Button>Edit Page</Button></Link>
        <Link to="/fill"><Button>Fill Page</Button></Link>
        <Link to="/check"><Button>CheckPage</Button></Link>
      </div>
    );
  }
}

export default App;
