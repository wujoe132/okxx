import React, { Component } from "react";
import Card from "./card";
import style from "./style"




class Nav extends Component {
    constructor(props){
        super(props);

        this.state = {
            showMenu: false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        this.setState({
            showMenu: true
        })
    }

    render (){
        return (
            <div style={ style.navbar }>
                <h1 style={ style.logo }> OKXX </h1>
                <div style={ style.searchSection }>
                    <form>
                        <input style={ style.input } placeholder = "search..." /> 
                    </form>
                    <div style= { style.i }>
                        <i onMouseOver={ this.props.handleMouseOver } className="fas fa-allergies"></i>
                    </div> 
                </div>
                
                <div style= { style.seci }>
                    <i onMouseOver={ this.props.handleMouseOver } onClick={ this.handleMenuClick } className="fas fa-brain"></i>    
                </div>

                { this.state.showMenu === true ? <Card /> : ""}
            </div>
        )
    }     
}

export default Nav;