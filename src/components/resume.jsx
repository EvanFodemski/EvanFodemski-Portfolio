import React, { useState } from "react";
import '../styles/res.css';

export default function Resume() {
  return (
    <div className="con">
      <div className="conTop">
        <h1>My Resume:</h1>
      </div>

      <div className="details">
        <div className="detailGroup">
          <h2>Sufficient languages</h2>
          <ul>
            <li>JavaScript</li>
          </ul>

          <h2>Web Development experienced in:</h2>
          <ul>
            <li>HTML and Advanced Css</li>
            <li>MERN</li>
            <li>Jquery</li>
            <li>Web and Third Party APIs</li>
            <li>NPM</li>
            <li>Babel</li>
            <li>PWA</li>
          </ul>

          <h2>DataBases</h2>
          <ul>
            <li>Sql and No sql</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
            <li>ORM and ODM</li>
          </ul>
        </div>

        <div className="detailGroup">
          <h2>Other Tools</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Render</li>
            <li>Insomnia</li>
            <li>WorkBench</li>
            <li>Compass</li>
            <li>Apollo SandBox</li>
          </ul>

          <h2>Security and Time limitations:</h2>
          <ul>
            <li>Json Web Tokens</li>
            <li>Sessions</li>
          </ul>

          <h2>Design/Architecture</h2>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Model View Controller</li>
          </ul>

          <h2>Hardware Experience</h2>
          <ul>
            <li>To Be added....</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
