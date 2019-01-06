import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Hardcore Frontend Developer, prefer DRY coding and KISS, design pattern over framework. 
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand" style={{width: '99%'}} />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand" style={{width: '90%'}} />
            <em>React Native</em>
          </li>
          <li>
            <span className="bar-expand" style={{width: '80%'}} />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand" style={{width: '70%'}} />
            <em>Angular</em>
          </li>
          <li>
            <span className="bar-expand"  style={{width: '70%'}}  />
            <em>HTML / CSS</em>
          </li>
          <li>
            <span className="bar-expand" style={{width: '50%'}}  />
            <em>Nodejs / Express</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
