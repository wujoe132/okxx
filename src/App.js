import React, { Component } from 'react';
import './App.css';

import Gallery from "./components/gallery/Gallery";
import SearchList from "./components/search-list/SearchList";
import Nav from "./components/nav/nav";
import VideoPlayer from "./components/video-player/VideoPlayer";

import { getMostPopularVideos, fetchYouTubeVideos, getVideoInfo, getRelativeVideoList, getCommentsList } from "./ults/ytUlts";



class App extends Component {

  constructor (props){
    super(props);
    this.state = {
        galleryVideos: "",
        searchResult: "",
        searchInput: "",
        videoId: "",
        videoInfo: "",
        relatedVideos: "",
        commentsList: "",
        showMenu: false,
        searchClick: false,
        videoClick: false,
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
    const searchInput = this.state.searchInput;
    fetchYouTubeVideos(searchInput).then(res => {
      this.setState({
        searchResult: res,
        searchClick: true,
      })
    })
  }

  handleSearchInput (event){
    this.setState({
        searchInput: event.target.value
    })
  }


  handleVideoClick(event) {
    console.log("here");
    
    const videoId = event.target.id;
    getVideoInfo(videoId).then(res => {
      this.setState({
        videoClick: true,
        videoId: videoId,
        videoInfo: res.items[0],
        searchClick: false,
      })
    });
    getRelativeVideoList(videoId).then(res => {
      this.setState({
        relatedVideos: res,
      })
    });
    getCommentsList(videoId).then(res => {
      this.setState({
        commentsList: res, 
      })
    })


  } 
  render() {
      // console.log("this is the state,", this.state)
    return (
      <div>
        <Nav 
          // properties //
          handleMouseOver={ this.handleMouseOver } 
          handleSearchInput={ this.handleSearchInput } 
          handleSearchClick={ this.handleSearchClick } 
          handleMenuClick={ this.handleMenuClick} 
          meNu={ this.state.showMenu }
          handleVideoClick={ this.handleVideoClick } />


          { this.state.searchClick  ? <SearchList videos={ this.state.searchResult } handleVideoClick={ this.handleVideoClick } 
                                                    handleVideoClick={ this.handleVideoClick }/> 
                                    : ( this.state.videoClick ? <VideoPlayer videoId = { this.state.videoId } videoInfo={ this.state.videoInfo } 
                                                                      videos={ this.state.relatedVideos } list={ this.state.commentsList }
                                                                      handleVideoClick={ this.handleVideoClick }/> 
                                                              : <Gallery videos={ this.state.galleryVideos } 
                                                                        handleVideoClick={ this.handleVideoClick } /> )}

                                    
      
      
      </div>   
    )
}
}

export default App;
