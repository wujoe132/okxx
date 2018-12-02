import React, { Component } from "react"

class ytUlts extends Component { 
    
    render (){
        return (
            <div>
                {this.props.articles.map((article, index) => {
                    return (
                        <div key={ index }>
                            <img src={ require(`../assets/image${index}.jpg`) }></img>
                            <h1>{ article.title }</h1>
                            <p>{ article.content }</p>
                        </div>
                    )
                })}
            </div>
        )
    }     
}

