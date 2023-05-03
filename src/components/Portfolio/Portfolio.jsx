import Header from "../Home/Header/Header";
import PortfolioSVG from "../../img/file-code-regular.svg"

function Portfolio() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <main>
          <div className="super-block-intro-page row">
            <div className="content-col">
              <div className="big-spacer"></div>
              <h1 className="text-center big-heading">Portfolio</h1>
              <div className="spacer"></div>
              <img src={PortfolioSVG} alt="" className="header-icon"/>
              <div className="spacer"></div>
              <p>
                As a front-end developer, I have experience working with a variety of technologies including React & Redux, JavaScript (ES6), HTML5 & CSS3, Bootstrap, jQuery, SASS, Git & GitHub, OOP, RESTful API, and Functional Programming.
              </p>
              <p>
                While I have honed my skills with these technologies, I am always eager to learn more and am committed to continuous development. I believe that my experience and passion for programming make me a valuable asset to any team. You can find examples of my work below on this page.
              </p>
              <div className="alert alert-info">
                Note: This website is currently under development and the current version may differ from what is planned for the future. Currently, I am working on improving functionality and design. Thank you for visiting my website!
              </div>
              <div className="big-spacer"></div>
              <h2 className="text-center big-subheading">Projects</h2>
              <div className="spacer"></div>
              {/* <div className="block-ui">
                <div className="block">
                  <h3 className="block-title">
                    <button className="block-header">
                      <span className="block-header-button-text map-title">
                        <span>
                          Tower Defense Game
                        </span>
                      </span>
                    </button>
                  </h3>
                </div>
                <div className="spacer"></div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Portfolio;