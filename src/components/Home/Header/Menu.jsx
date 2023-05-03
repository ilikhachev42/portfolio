import React, {useState} from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="menu-container">
      <button className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span className="menu-btn-text">
            Menu
          </span>
        </button>
        {
          toggle 
          ? 
          <ul className="nav-list">
          <li>
            <Link className="nav-link" to='/Portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
        :
        null
        }
    </div>
  )
}

export default Menu;