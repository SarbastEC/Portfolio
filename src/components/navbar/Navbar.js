import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import { AiFillHome  } from "react-icons/ai";
import { IoIosPaper  } from "react-icons/io";
import { FaClipboardList  } from "react-icons/fa";
import { BsFillCollectionFill  } from "react-icons/bs";
import { MdContactMail  } from "react-icons/md";
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
        background: darkMode? "var(--opacity-grey-bg)" : "var(--light-orange)",
        border: darkMode? "" : "3px solid var(--opacity-grey-bg)"
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
          {/* <AiFillHome /> */}
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
          {/* <FaClipboardList/> */}
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
          {/* <IoIosPaper/> */}
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
          {/* <BsFillCollectionFill/> */}
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
          {/* <MdContactMail/> */}
        </Link>

      </nav>
      : 
      <div className="menu-icon"
      style={{
        background: darkMode? "var(--opacity-grey-bg)" : "var(--light-orange)",
        border: darkMode? "" : "3px solid var(--opacity-grey-bg)"
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