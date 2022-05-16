import React from 'react';
import './LanguageToggle.css';
import { themeContext } from '../../context/themeContext';
import { useContext } from 'react';

const LanguageToggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type: 'TOGGLE'})
    }
  return (
    <div className='languageToggle' onClick={handleClick}>
        <p className='swidish'>SV</p>
        <p className='english'>EN</p>
        <div className="toggleBtn" 
        style={darkMode? {left: '2px'} : {right: '2px'}}
        >
        
        </div>
    </div>
  )
}

export default LanguageToggle