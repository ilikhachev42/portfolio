import React from "react";
import Menu from "./Menu";
import TerminalSVG from '../img/terminal-solid.svg'

function Header() {
  return (
    <div className="header">
      <navbar className="nav">
        <a className="nav-logo" href="">ilikhachev42:~$</a>
        <Menu/>
      </navbar>
    </div>
  )
} 

export default Header;