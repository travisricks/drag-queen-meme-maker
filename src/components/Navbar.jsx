import React from "react";
import "../styles/App.scss";
import "../styles/Nav.scss";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="wrapNav">
        <a href="#" onClick={props.clickHome}><h2>Drag Queen Meme Finder</h2></a>
      </div>
    </div>
  );
}
