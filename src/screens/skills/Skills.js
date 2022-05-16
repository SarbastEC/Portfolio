import React from 'react';
import './Skills.css';
import Vid from '../../assets/video/video-1.mp4';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='skills' id='skills'>
      <div className="videoWrap">
        <video src={Vid} className='video' autoPlay loop muted type='video/mp4'></video>
      </div>
      <div className="content">
        <h2 style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>FÄRDIGHETER</h2>
        <div className="skills-group">
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>HTML</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>CSS</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>REACT</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>VUE</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>ANGULAR</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>FIREBASE</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>MONGODB</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>ADOBEXD</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>FIGMA</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills