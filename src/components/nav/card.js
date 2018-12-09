import React, { Component } from 'react';
import style from "./style";

class Card extends Component {
  constructor() {
    super();
  }
  



  render() {
    return (
      <div>
          <ul style={ style.list }>
              {/* <li></li>
              <li></li> */}
              <li style={ style.profile }><a href="https://github.com/wujoe132">GitHub</a></li>
          </ul>
      </div>
    );
  }
}

export default Card;