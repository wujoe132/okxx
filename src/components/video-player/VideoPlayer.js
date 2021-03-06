import React, { Component } from "react";
import style from "./style";
import VideoList from "../video-list/videoList";
import CommentsList from "../commentsList/comments";

class VideoPlayer extends Component {

    render (){
        // console.log("in videoplayer")
        if (!this.props.videoInfo) {
            return <div>Hello</div>
        }
        else if (this.props.videoInfo) {
            const url = `https://www.youtube.com/embed/${this.props.videoId}`;
            const title = this.props.videoInfo.snippet.title;
            const viewCount = this.props.videoInfo.statistics.viewCount;
            return (
                <div style={ style.block }>
                    <div style={ style.main }>
                        <iframe style={ style.video } title={ title} src={ url }></iframe>
                        <VideoList videoList={ this.props.videos } handleVideoClick={ this.props.handleVideoClick}/>
                    </div>
                    <div style={ style.info }>
                        <h1 style={ style.title }>{ title }</h1>
                        <div>{ viewCount }</div>
                    </div>
                    <div style={ style.bottom }>
                        <CommentsList commentList= { this.props.list }/>
                        
                    </div>
                </div>
            )
        
        }
    }
};

export default VideoPlayer; 