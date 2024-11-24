import React from "react";
import {NavLink} from "react-router-dom"
import "../Header/Header.css";
import backgroundVideo from "https://drive.google.com/file/d/1RgEbM8IiIgz2IyBi7aejt-mA01pqCraO/view?usp=sharing";
function LetsTranslate() {
  return (
    <>
      <div className="background-video">
        <video className="background-clip" autoPlay loop muted alternate>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <section className="lets-translate">
          <p>Let's Translate</p>
          <NavLink to = "/translatorapp">
            <button className="go-to-app">Go To App</button>
          </NavLink>
        </section>
      </div>
    </>
  );
}

export default LetsTranslate;
