import React from "react";
import "./style.css";

const App = () => {
  return (
    <div className="main-container">
      <div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <div className="nav-bar">
        <nav className="nav">
          <img
            src="https://www.freeskout.com/img/freeskout.png"
            alt=""
            className="logo"
          />
          <nav className="nav-list">
            <li>BRANDS</li>
            <li>INFLUENCERS</li>
            <li>PRICE</li>
            <li>BLOGS</li>
            <li>CONTACT</li>
          </nav>
        </nav>
      </div>
      <div className="middle-part">
        <div className="middle-text">
          <section>
            <h2 className="heading">Discover. Connect. Collaborate.</h2>
            <p>An ecosystem for Social media Influencers and Brand.</p>
            <button className="Influencer">
              <span>I'M AN INFLUENCER</span>
            </button>
            <button className="Brand">
              <span>I'M A BRAND</span>
            </button>
          </section>

          <section>
            <img
              src="https://www.freeskout.com/img/top-influencer-profiles/top-3.png"
              alt=""
              className="phone-img"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
