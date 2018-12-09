import React, { Component } from "react";
import style from "./style";

class Gallery extends Component { 
    
    render (){
        if (!this.props.videos.items) {
            return (
                <div>No Videos yet</div>
            );
            
        } else if (this.props.videos.items) {
            console.log("get here in gallery")
            console.log(this.props.videos)

            return (
                <div style= { style.blog }>
                
                    {this.props.videos.items.map((video, index) => {
                        const imageUrl = video.snippet.thumbnails.high.url; 
                        const title = video.snippet.title;
                        const content = video.statistics.viewCount;
                        const channel = video.snippet.channelTitle;
                        const time = video.snippet.publishedAt;
                        const id = video.id;

                        return (
                            <div key={ index }style={ style.main }>
                                <img style={ style.img } src={ imageUrl }onClick={ this.props.handleVideoClick } id={ id }></img>
                                <h1 style={ style.title } onClick={ this.props.handleVideoClick } id={ id }>{ title }</h1>
                                <div style={ style.para } onClick={ this.props.handleVideoClick }id={ id }>
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

export default Gallery;

