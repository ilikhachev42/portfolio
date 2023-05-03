import { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioSVG from '../../../img/file-code-regular.svg';
import PortfolioGraySVG from '../../../img/file-code-regular-gray.svg';
import AboutSVG from '../../../img/info-solid.svg';
import AboutGraySVG from '../../../img/info-solid-gray.svg';
import ContactSVG from '../../../img/address-book-regular.svg';
import ContactGraySVG from '../../../img/address-book-regular-gray.svg';
import GitHubSVG from '../../../img/github.svg'
import GitHubGraySVG from '../../../img/github-gray.svg';
import WrenchSVG from '../../../img/screwdriver-wrench-solid.svg';
import WrenchGraySVG from '../../../img/screwdriver-wrench-solid-gray.svg'

function Main() {
  const [items, setItems] = useState([
    { id: 1, text: 'Portfolio', hover: false, SVG: PortfolioSVG, hoverSVG: PortfolioGraySVG, link: '/Portfolio' },
    { id: 2, text: 'About', hover: false, SVG: AboutSVG, hoverSVG: AboutGraySVG, link: '/About' },
    { id: 3, text: 'Contact', hover: false, SVG: ContactSVG, hoverSVG: ContactGraySVG, link: '/Contact' },
    { id: 4, text: 'Code', hover: false, SVG: GitHubSVG, hoverSVG: GitHubGraySVG, link: 'https://github.com/ilikhachev42/portfolio' },
    { id: 5, text: 'Click me', hover: false, SVG: WrenchSVG, hoverSVG: WrenchGraySVG, link: '' }
  ]);

  const handleMouseEnter = (itemId) => {
    setItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, hover: true } : item
      )
    );
  };
  
  const handleMouseLeave = (itemId) => {
    setItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, hover: false } : item
      )
    );
  };

  return (
    <div className="map-ui">
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link
              className="btn link-btn btn-lg" 
              to={item.link}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <div>
                <img src={item.hover ? item.hoverSVG : item.SVG} className="map-icon" />
                {item.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Main;