import React from 'react';
// import LanguageToggle from '../languageToggle/LanguageToggle';
import Audio from '../audioIcon/Audio';
import ThemeToggle from '../themeToggle/ThemeToggle';
import './TopNav.css';

const TopNav = () => {
  return (
    <div className="topNav">
        <Audio/>
        <ThemeToggle/>
        {/* <LanguageToggle/> */}
    </div>
  )
}

export default TopNav