import React from "react";
import './Menu.css';
export default function Menu(props) {

  return (
    <div className="containerMenu">
        <div className={`menu ${props.menuState ? "open" : "close"}`}>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </div>
        <div className="content">
            <ul>
                <li>Content 1 </li>
                <li>Content 2</li>
                <li>Content 3</li>
            </ul>
        </div>
    </div>
  );
}