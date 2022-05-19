import React from 'react';
import './Contact.css';
import ContactImg from '../../assets/images/contactImg.svg';
import ContactForm from '../../components/contactForm/ContactForm';
import { BsFillTelephoneFill  } from "react-icons/bs";
import { GrMail  } from "react-icons/gr";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contactContainer">
        <h3>CONTACT ME</h3>
        <div className="contactMain">
          <div className="contactLeft">
            <div className="contactImgWrap">
              <img src={ContactImg} alt="" className='contactIImg'/>
            </div>
            <div className="contactInfo">
              <div className="infoItem">
                <BsFillTelephoneFill className='infoIcon'/>
                <p>070 445 30 50</p>
              </div>
              <div className="infoItem">
                <GrMail className='infoIcon'/>
                <p>sarbast.hesso@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactRight">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact