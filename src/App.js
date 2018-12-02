import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/gallery/Gallery";
import Nav from "./components/nav/nav";



class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Gallery />
      </div>
    )
  }
}

export default App;
