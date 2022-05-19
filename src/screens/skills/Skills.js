import React from 'react';
import './Skills.css';
import Vid from '../../assets/video/video-1.mp4';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';

const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'VUE', 'ANGULAR', 'FIREBASE', 'MONGODB', 'ADOBEXD', 'FIGMA', 'BOOTSTRAP', 'Github'];

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='skills' id='skills'>
      <div className="videoWrap">
        <video src={Vid} className='video' autoPlay loop muted type='video/mp4'></video>
      </div>
      <div className="content">
        <h3 style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}}>FÄRDIGHETER</h3>
        <div className="skills-group">
          {skills&&skills.map((skill, index) => (
            <div className="skill" style={{background: darkMode? "var(--black-bg)" : "var(--light-orange)"}} key={index}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills