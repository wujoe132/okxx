import React, { Component } from 'react';
import './App.css';

import Gallery from "./components/gallery/Gallery";
import SearchList from "./components/search-list/SearchList";
import Nav from "./components/nav/nav";

import { getMostPopularVideos, fetchYouTubeVideos, getVideoInfo } from "./ults/ytUlts";



class App extends Component {

  constructor (props){
    super(props);
    this.state = {
        galleryVideos: "",
        searchResult: "",
        searchClick: false,
        searchinput: "",
        showMenu: false,
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  // setState is used to change the value of a property/properties in this.state
  componentWillMount(){
    getMostPopularVideos().then(res => {
      this.setState({
        galleryVideos: res
      })
    })
  }

  // Menu
  handleMouseOver(event){
    event.target.style.boxShadow="10px 5px 5px grey"; //.transition = "grey, 2s"//;
  }
  // Menu
  handleMouseLeave(event) {
    event.target.style.boxShadow="none";
  }

  handleMenuClick() {
    this.setState({
        showMenu: true
    })  
  }

  // If click search, display SearchList; if didn't click search, display Gallery
  handleSearchClick() {
    const searchInput = this.state.searhInput;
    fetchYouTubeVideos(searchInput).then(res => {
      this.setState({
        searchResult: res,
        searchClick: true,
    })
  })
}

  handleSearchInput (event){
    this.setState({
        searchinput: event.target.value
    })
  }


  handleVideoClick(event) {
    const videoID = event.target.id
    getVideoInfo(videoID).then(res => {
      console.log("this is the video", res);
    })
      
  } 
  render() {
    return (
      <div>
        <Nav 
          // properties //
          handleMouseOver={ this.handleMouseOver } 
          handleSearchInput={ this.handleSearchInput } 
          handleSearchClick={ this.handleSearchClick } 
          handleMenuClick={ this.handleMenuClick} 
          meNu={ this.state.showMenu } />
          

          { this.state.searchClick  ? <SearchList videos={ this.state.searchResult }/> 
                                    :  <Gallery videos={ this.state.galleryVideos } 
                                                handleVideoClick={ this.handleVideoClick }/>  }

      </div>
    )
  }
}

export default App;
