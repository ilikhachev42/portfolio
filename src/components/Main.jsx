import React, { useState } from "react";
import PortfolioSVG from '../img/file-code-solid.svg'
import AboutSVG from '../img/info-solid.svg'
import ContactSVG from '../img/address-book-solid.svg'
import GitHubSVG from '../img/github.svg'
import GitHubGraySVG from '../img/github-gray.svg'
import WrenchSVG from '../img/screwdriver-wrench-solid.svg'

function Main() {
  return (
      <div className="map-ui">
        <ul>
          <li>
            <a className="btn link-btn btn-lg" href="">
              <div>
                <img src={PortfolioSVG} className="map-icon">
                </img>
                Portfolio
              </div>
            </a>
          </li>
          <li>
            <a className="btn link-btn btn-lg" href="">
              <div>
                <img src={AboutSVG} className="map-icon">
                </img>
                About
              </div>
            </a>
          </li>
          <li>
            <a className="btn link-btn btn-lg" href="">
              <div>
                <img src={ContactSVG} className="map-icon">
                </img>
                Contact
              </div>
            </a>
          </li>
          <li>
          <a className="btn link-btn btn-lg" href="">
              <div>
                <img src={GitHubGraySVG} className="map-icon" />
                Code
              </div>
            </a>
            <a className="btn link-btn btn-lg" href="">
              <div>
                <img src={WrenchSVG} className="map-icon" />
                 Click me
                 {/* This site is still under construction! */}
              </div>
            </a>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
  )
}

export default Main;