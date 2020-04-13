import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// Dynamic className using template literals
// onClick combines the Url that the page you are already on and the linkUrl from the item in the sections array
// Dynamic backgroundImage from the sections array
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
    className={`${size} menu-item`} 
    onClick= {() => history.push(`${match.url}${linkUrl}`)}
    >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
