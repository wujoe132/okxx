import React, { Component } from "react";
import style from "./style";

class CommentsList extends Component {
    render(){
        if (!this.props.commentList) {
            // console.log("here")
            return (
                <div>Loading...</div>
            )
        } 
        else if (this.props.commentList) {
            // console.log(this.props.commentList);
            
            return(
                <div>    
                    {this.props.commentList.items.map((video, index) => {
                        const imageUrl = video.snippet.topLevelComment.snippet.authorProfileImageUrl; 
                        const title = video.snippet.topLevelComment.snippet.authorDisplayName;
                        const text = video.snippet.topLevelComment.snippet.textDisplay;
                        const time = video.snippet.topLevelComment.snippet.publishedAt;
                        const id = video.id;
        
                        return (
                            <div style={ style.block }>
                                <div style={ style.profile }>
                                    <img style={ style.img }src={ imageUrl }onClick={ this.props.handleVideoClick } id={ id }></img>
                                    <h1  style={ style.title }onClick={ this.props.handleVideoClick } id={ id }>{ title }</h1>
                                </div>
                                <div style={ style.bottom }onClick={ this.props.handleVideoClick }id={ id }>
                                    <p onClick={ this.props.handleVideoClick } id={ id }>{ text }</p>
                                    <p onClick={ this.props.handleVideoClick } id={ id }>{ time }</p> 
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
