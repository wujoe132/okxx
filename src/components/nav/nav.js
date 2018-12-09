import React, { Component } from "react";
import Card from "./card";
import style from "./style"

class Nav extends Component {
       render (){
        return (
            <div style={ style.navbar }>
                <h1 style={ style.logo }> OKXX </h1>
                <div style={ style.searchSection }>
                    <form>
                        <input onChange={ this.props.handleSearchInput }style={ style.input } placeholder = "search..." /> 
                    </form>
                    <div style= { style.i }>
                        <i onMouseOver={ this.props.handleMouseOver }  onClick={ this.props.handleSearchClick } className="fas fa-allergies"></i>
                    </div> 
                </div>
                
                <div style= { style.seci }>
                    <i onMouseOver={ this.props.handleMouseOver } onClick={ this.props.handleMenuClick } className="fas fa-brain"></i>    
                </div>

                { this.props.meNu === true ? <Card /> : ""}
            </div>
        )
    }     
}

export default Nav;