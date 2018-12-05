import React, { Component } from "react";
import style from "./style";
// import articles from "../../data/articles";
// import getMostPopularVideos from "../../ults/ytUlts";

class Gallery extends Component { 
    
    render (){
        console.log("In gallery", this.props.videos.items);

        if (!this.props.videos.items) {
            console.log("no videos yet");
            return (
                <div>No Videos yet</div>
            );
            
        } else if (this.props.videos.items) {
            return (
                <div style= { style.blog }>
                    {this.props.videos.items.map((Videos, index) => {
                        return (
                            <div key={ index }style={ style.main }>
                                {/* <img style={ style.img } src={ require(`../../assets/image${index}.jpeg`) }></img>
                                <h1 style={ style.t }>{ articles.title }</h1>
                                <div style={ style.p }>
                                    <p>{ articles.content }</p>
                                    <p>{ articles.views }</p>
                                </div> */}
                                
                    
                            </div>
                        )
                    })}
                </div>
            )
        }
    }     
}

export default Gallery;

