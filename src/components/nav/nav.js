import React, { Component } from "react";
import style from "./style"




class Nav extends Component {
    render (){
        return (
            <div style={style.navbar}>
                <h1 style={ style.logo }> OKXX </h1>
                <form  >
                    <input style={style.input} placeholder = "search..." /> 
                </form>
                <div style= { style.i }>
                        <i class="fas fa-allergies"></i>
                    </div> 
                <div style= { style.seci }>
                    <i class="fas fa-brain"></i>    
                </div>
            </div>
        )
    }     
}

export default Nav;