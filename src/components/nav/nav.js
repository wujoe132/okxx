import React, { Component } from "react";
import style from "./style"




class Nav extends Component {
    render (){
        return (
            <div style={style.navbar}>
                <form  >
                    <input style={style.input} placeholder = "search..." />
                </form>
            </div>
        )
    }     
}

export default Nav;