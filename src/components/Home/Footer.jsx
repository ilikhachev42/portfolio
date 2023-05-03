import React from "react";
import GitHubSVG from '../img/github.svg'
import TelegramSVG from '../img/telegram.svg'
import LinkedinSVG from '../img/linkedin-in.svg'
import EmailSVG from '../img/envelope-solid.svg'

function Footer() {
  return (
    <div className="site-footer">
      <div className="footer">
        <div className="footer-links">
          <a href="">
            <img src={LinkedinSVG} className="map-icon"/>
          </a>
          <a href="">
            <img src={GitHubSVG} className="map-icon"/>
          </a>
          <a href="">
            <img src={TelegramSVG} className="map-icon"/>
          </a>
          <a href="">
            <img src={EmailSVG} className="map-icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer