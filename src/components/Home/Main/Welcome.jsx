import React from "react";

function Welcome() {
  return (
    <div className="content">
      <main className="content-wrapper">
        <div className="container">
          <div className="content-col">
            <div className="spacer"></div>
            <h1 className="welcome-text text-center">Welcome to my portfolio page</h1>
            <div className="spacer"></div>
            <div className="quote-container text-center">
              <blockquote className="blockquote">
                <span>
                  <q>A true master is an eternal student.</q>
                </span>
                <footer className="quote-author">
                  <cite>Master Yi</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Welcome;