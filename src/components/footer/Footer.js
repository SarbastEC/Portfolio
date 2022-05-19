import React, {useState} from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo.png';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  return (
    <footer className='footer'>
      <div className="textWrap">
        <img src={Logo} alt="" />
        <p>SARBAST HESSO</p>
        <p>{year}</p>
      </div>
    </footer>
  )
}

export default Footer