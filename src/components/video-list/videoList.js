import React, { Component } from "react";
import style from "./style";

class VideoList extends Component {
    render (){
        console.log("in videoplist", this.props)
        if (!this.props.videoList.items) {
            // console.log("here")
            return (
                <div>World</div>
            )
        } 
        else if (this.props.videoList.items) {
            // console.log(this.props.videoList);
            
            return(
                <div>    
                    {this.props.videoList.items.map((video, index) => {
                        const imageList = video.snippet.thumbnails.high.url; 
                        const title = video.snippet.title;
                        
                        const channel = video.snippet.channelTitle;
                        const time = video.snippet.publishedAt;
                        const id = video.id.videoId;
                        // console.log(id);
                        
        
                        return (
                            <div style={ style.main }>
                                <img style={ style.img } src={ imageList } onClick={ this.props.handleVideoClick } id={ id }></img>
                                <h1  style={ style.title }onClick={ this.props.handleVideoClick } id={ id }>{ title }</h1>
                                <div style={ style.info } onClick={ this.props.handleVideoClick }id={ id }>
                                    <p onClick={ this.props.handleVideoClick } id={ id }>{ time }</p>
                                    <p onClick={ this.props.handleVideoClick } id={ id }>{ channel }</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default VideoList;