import React, { Component } from "react";
import style from "./style";

class SearchList extends Component {

    render(){
        if (!this.props.videos) {
            return (
                <div>
                    <p>null</p>
                </div>
            )
        }
        else if (this.props.videos) {
            
            return(
                <div style= { style.blog }>
                      {this.props.videos.items.map((videos, index) => {
                        const imageUrl = videos.snippet.thumbnails.high.url; 
                        const title = videos.snippet.title;
                        const channel = videos.snippet.channelTitle
                        const time = videos.snippet.publishedAt
                        const id = videos.id.videoId
                        console.log(id);
                        return (
                            <div key={ index }style={ style.main } onClick={ this.props.handleVideoClick } id={ id }>
                                <img style={ style.img } src={ imageUrl } onClick={ this.props.handleVideoClick } id={ id }></img>
                                <h1 style={ style.title } id={ id } onClick={ this.props.handleVideoClick }>{ title } </h1>
                                <div style={ style.para }>
                                    <p id={ id } onClick={ this.props.handleVideoClick }>{ time }</p>
                                    <p id={ id } onClick={ this.props.handleVideoClick }>{ channel }</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) 
        }
    }
};

export default SearchList;
