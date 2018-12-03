import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/gallery/Gallery";
import Nav from "./components/nav/nav";
import YtUlts from './ults/ytUlts';
import articles from "./data/articles";
import images from "./data/images"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'




class App extends Component {

constructor (props){
    super(props);
    this.state = {
        articles: articles,
        images: images
    }
}
  render() {
    return (
      <div>
        <Nav />
        <YtUlts images= { this.state.images } articles={ this.state.articles } />
      </div>
    )
  }
}

export default App;
