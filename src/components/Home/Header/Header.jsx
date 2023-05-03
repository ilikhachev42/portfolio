import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <navbar className="nav">
        <Link className="nav-logo" to="/">ilikhachev42:~$</Link>
        <Menu/>
      </navbar>
    </div>
  )
} 

export default Header;