import React, {useState} from 'react';
import './Home.css';
import ToggleNav from '../../components/toggleNav/ToggleNav';
import profileImg from '../../assets/images/profileImg.jpg';
import profileImg2 from '../../assets/images/profileImg2.jpg';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';
import Pdf from '../../assets/document/CV.pdf'
import Btn from '../../components/btn/Btn';

const Home = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [btnTitle] = useState('CV')
  return (
    <div className='home' id='home'>
      <ToggleNav/>
      <div className="headerContainer">
        <div className="header">
          <div className="headerLeft">
            <h1>SARBAST HESSO</h1>
            <h3>FRONTENDUTVECKLARE</h3>
            <p>Teknikintresserad YH-student med spetskompetens inomwebb- & frontendutveckling</p>
            <a href={Pdf}>
              <Btn btnTitle={btnTitle}/>
            </a>
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

