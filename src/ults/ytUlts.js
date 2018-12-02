import React, { Component } from "react";
import style from "./style";
import images from "../data/images";
import articles from "../data/articles";

class YtUlts extends Component { 
    
    render (){
        return (
            <div style= { style.blog }>
                {/* {this.props.articles.map((articles, index) => {
                    return (
                        <div >
                            <img src={ require(`../assets/image${index}.jpeg`) }></img>
                            <h1>{ articles.title }</h1>
                            <p>{ articles.content }</p>
                            <p>{ articles.views }</p>
                        </div>
                    )
                })} */}
                 <div style= { style.main }>
                    <img style={ style.img } src={ require("../assets/image1.jpeg") }></img> 
                    <h1>{ articles[0].title }</h1>
                    <p>{ articles[0].content }</p>
                    <p>{ articles[0].views }</p>
                </div>
                <div style= { style.main }>
                    <img style={ style.img } src={ require("../assets/image2.jpeg") }></img> 
                    <h1>{ articles[1].title }</h1>
                    <p>{ articles[1].content }</p>
                    <p>{ articles[1].views }</p>
                </div>
                <div style= { style.main }>
                    <img style={ style.img } src={ require("../assets/image3.jpeg") }></img> 
                    <h1>{ articles[2].title }</h1>
                    <p>{ articles[2].content }</p>
                    <p>{ articles[2].views }</p>
                </div>
            </div>
        )
    }     
}

export default YtUlts;

