import React, { Component } from "react";
// import style from "./style";

class CommentsList extends Component {
    render(){
        if (!this.props.commentList) {
            // console.log("here")
            return (
                <div>Loading...</div>
            )
        } 
        else if (this.props.commentList) {
            return(
                <div>    
                    {this.props.commentList.items.map((video, index) => {
                        const imageUrl = video.snippet.thumbnails.high.url; 
                        const title = video.snippet.title;
                        const channel = video.snippet.channelTitle;
                        const time = video.snippet.publishedAt;
                        const id = video.id;
        
                        return (
                            <div key={ index }>
                                <img src={ imageUrl }onClick={ this.props.handleVideoClick } id={ id }></img>
                                <h1  onClick={ this.props.handleVideoClick } id={ id }>{ title }</h1>
                                <div onClick={ this.props.handleVideoClick }id={ id }>
                                    
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
export default CommentsList;
