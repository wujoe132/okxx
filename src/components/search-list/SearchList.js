import React, { Component } from "react";
import style from "./style";

class SearchList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        if (!this.props.videos) {
            return (
                <div>
                    <p>null</p>
                </div>
            )
        }
        else if (this.props.videos) {
            
            console.log("this is the state:", this.props.videos.items);

            return(
                <div style= { style.blog }>
                      {this.props.videos.items.map((videos, index) => {
                        const imageUrl = videos.snippet.thumbnails.high.url; 
                        const title = videos.snippet.title;
                        const channel = videos.snippet.channelTitle
                        const time = videos.snippet.publishedAt

                        return (
                            <div key={ index }style={ style.main }>
                                <img style={ style.img } src={ imageUrl  }></img>
                                <h1 style={ style.title }>{ title }</h1>
                                <div style={ style.para }>
                                    <p>{ time }</p>
                                    <p>{ channel }</p>
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
