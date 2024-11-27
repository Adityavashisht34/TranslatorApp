// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../styles/Header.css"
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="box">
        <div className="outer-container">
          <div className="logo-brand-container">
            <div className="logo"></div>
            <div className="brand">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80"
                  height="80"
                  viewBox="0 0 50 50"
                >
                  <path d="M 6 3 C 4.300781 3 3 4.300781 3 6 L 3 26 C 3 27.699219 4.300781 29 6 29 L 6.0625 29 L 10.46875 23.71875 L 10.78125 23.34375 C 10.476563 23.460938 10.273438 23.542969 10.21875 23.5625 L 9.59375 21.65625 C 9.648438 21.636719 12.394531 20.699219 15.0625 18.8125 C 12.503906 16.488281 11.207031 14.121094 11.125 13.96875 L 12.875 13.03125 C 12.894531 13.066406 14.167969 15.34375 16.65625 17.53125 C 18.265625 16.078125 19.625 14.230469 19.9375 12 L 8 12 L 8 10 L 16 10 L 16 8 L 18 8 L 18 10 L 25 10 L 25 12 L 21.9375 12 C 21.640625 14.789063 20.132813 17.035156 18.28125 18.78125 C 19.03125 19.300781 19.847656 19.777344 20.75 20.1875 C 21.617188 19.449219 22.742188 19 24 19 L 29 19 L 29 6 C 29 4.300781 27.699219 3 26 3 Z M 16.6875 20.125 C 15.246094 21.203125 13.75 22 12.5625 22.5625 L 13.53125 23.71875 L 17.9375 29 L 19 29 L 19 24 C 19 23.214844 19.1875 22.46875 19.5 21.8125 C 18.464844 21.308594 17.53125 20.742188 16.6875 20.125 Z M 24 21 C 22.300781 21 21 22.300781 21 24 L 21 32.0625 L 26.28125 36.46875 L 28.125 38 L 26.28125 39.53125 L 21 43.9375 L 21 44 C 21 45.699219 22.300781 47 24 47 L 44 47 C 45.699219 47 47 45.699219 47 44 L 47 24 C 47 22.300781 45.699219 21 44 21 Z M 12 25 L 7 31 L 10 31 L 10 35 L 14 35 L 14 31 L 17 31 Z M 33 26.40625 L 35.09375 26.40625 L 40.3125 40.1875 L 37.8125 40.1875 L 36.6875 37 L 31.40625 37 L 30.3125 40.1875 L 27.8125 40.1875 Z M 34 29.40625 L 32 35.09375 L 36 35.09375 Z M 19 33 L 19 36 L 10 36 L 14 40 L 19 40 L 19 43 L 25 38 Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="navbar-container">
            <Link to="/" className="tab Home">
              Home
            </Link>
            <Link to="/translatorapp" className="tab">
              Translator App
            </Link>
            <Link to="/team" className="tab">
              Meet Our Team
            </Link>
            <Link to="/history" className="tab">
              Translation History
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
