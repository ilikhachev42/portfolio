import React, {useState} from "react";

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
            <a className="nav-link" href="">Portfolio</a>
          </li>
          <li>
            <a className="nav-link" href="">About</a>
          </li>
          <li>
            <a className="nav-link" href="">Contact</a>
          </li>
        </ul>
        :
        null
        }
    </div>
  )
}

export default Menu;