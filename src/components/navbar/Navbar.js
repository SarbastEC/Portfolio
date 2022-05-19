import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import { GiHamburgerMenu  } from "react-icons/gi";
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';

const Navbar = ({isOpen, toggle}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div onClick={toggle}>
      {isOpen 
      ? 
      <nav className='navbar'
      style={{
        background: darkMode? "var(--opacity-grey-bg)" : "var(--opacity-orange)"
      }}
      >

        <Link to='home' 
        style={{
          color: darkMode? "var(--orange)" : "var(--black-text)"
        }}
        className='navLink' 
        exact={true} 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={0}
        onClick={toggle}
        >
          <p>Home</p>
        </Link>

        <Link to='skills'
        style={{
          color: darkMode? "var(--orange)" : "var(--black-text)"
        }} 
        className='navLink' 
        exact={true} 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={0}
        onClick={toggle}
        >
          <p>Skills</p>
        </Link>

        <Link to='reusme' 
        style={{
          color: darkMode? "var(--orange)" : "var(--black-text)"
        }}
        className='navLink' 
        exact={true} 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={0}
        onClick={toggle}
        >
          <p>Resume</p>
        </Link>

        <Link to='projects' 
        style={{
          color: darkMode? "var(--orange)" : "var(--black-text)"
        }}
        className='navLink' 
        exact={true} 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={0}
        onClick={toggle}
        >
          <p>Projects</p>
        </Link>

        <Link to='contact' 
        style={{
          color: darkMode? "var(--orange)" : "var(--black-text)"
        }}
        className='navLink' 
        exact={true} 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={0}
        onClick={toggle}
        >
          <p>Contact</p>
        </Link>

      </nav>
      : 
      <div className="menu-icon"
      style={{
        background: darkMode? "var(--opacity-grey-bg)" : "var(--opacity-orange)"
      }}
      >
        <div  className='hamburgerMenu' 
        style={{
          color: darkMode? "var(--orange)" : "var(--black-text)"
        }}
        >
          <GiHamburgerMenu/>
        </div>
      </div>
      
      }

    </div>
  )
}

export default Navbar