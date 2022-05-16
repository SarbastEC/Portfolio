import React from 'react';
import './Home.css';
import TopNav from '../../components/topNav/TopNav';
import profileImg from '../../assets/images/profileImg.jpg';
import profileImg2 from '../../assets/images/profileImg2.jpg';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';
import Pdf from '../../assets/document/CV.pdf'

const Home = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='home' id='home'>
      <TopNav/>
      <div className="headerContainer">
        <div className="header">
          <div className="headerLeft">
            <h1>SARBAST HESSO</h1>
            <h3>FRONTENDUTVECKLARE</h3>
            <p>Teknikintresserad YH-student med spetskompetens inomwebb- & frontendutveckling</p>
            <div className='btnWrap'>
              <a href={Pdf} target="_blank" className='resumeBtn' style={{color: darkMode? "var(--white-text)" : "var(--black-text)"}}>
                CV
              </a>
            </div>
          </div>
          <div className="headerRight">
            <div className="imgWrap">
              {
                darkMode ? 
                <img className='profileImg' src={profileImg} alt="" />
                :
                <img className='profileImg' src={profileImg2} alt="" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

