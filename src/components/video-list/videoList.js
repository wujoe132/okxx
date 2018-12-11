import React, { Component } from "react";
// import style from "./style";

class VideoList extends Component {
    render (){
        console.log("in videoplist", this.props)
        if (!this.props.videoList) {
            console.log("here")
            return (
                <div>World</div>
            )
        } 
        else if (this.props.videoList) {
            return(
                <div>    
                    {this.props.videoList.items.map((video, index) => {
                        const imageUrl = video.snippet.thumbnails.high.url; 
                        const title = video.snippet.title;
                        const content = video.statistics.viewCount;
                        const channel = video.snippet.channelTitle;
                        const time = video.snippet.publishedAt;
                        const id = video.id;
        
                        return (
                            <div key={ index }>
                                <img src={ imageUrl }onClick={ this.props.handleVideoClick } id={ id }></img>
                                <h1  onClick={ this.props.handleVideoClick } id={ id }>{ title }</h1>
                                <div onClick={ this.props.handleVideoClick }id={ id }>
                                    <p onClick={ this.props.handleVideoClick } id={ id }>{ content }</p>
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