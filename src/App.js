import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/gallery/Gallery";
import Nav from "./components/nav/nav";

import articles from "./data/articles";
import images from "./data/images"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { getMostPopularVideos } from "./ults/ytUlts";



class App extends Component {

  constructor (props){
    super(props);
    this.state = {
        videos: "",
        articles: articles,
        images: images
    }
}

  componentWillMount(){
    getMostPopularVideos().then(res => {
      this.setState({
        videos:res
      })
      // console.log("this is the videos", res);
      
    })

}

handleMouseOver(event){
  // console.log(event.target);
  event.target.style.boxShadow="10px 5px 5px grey"; //.transition = "grey, 2s"//;
}

handleMouseLeave(event) {
  event.target.style.boxShadow="none";
}

  render() {
    
    console.log("In App.js", this.state.videos);
    
    return (
      <div>
        <Nav handleMouseOver={ this.handleMouseOver } />
        <Gallery videos={ this.state.videos }/>
      </div>
    )
  }
}

export default App;
