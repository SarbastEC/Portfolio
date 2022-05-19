import React, {useState} from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import Btn from '../btn/Btn';


const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

const ContactForm = () => {

  const [btnTitle] = useState('SEND');
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
      setToSend({...toSend, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({name:'', email: '', message:''})
      })
      .catch((err) => {
          console.log('FAILED', err)
      })
  }

  return (
    <form action="" className='form' onSubmit={handleSubmit}>
        <div className="inputGroup">
            <label className='formLabel' htmlFor="name">Name</label>
            <input type="text" className='formInput' name='name' value={toSend.name} onChange={handleChange}/>
        </div>
        <div className="inputGroup">
            <label className='formLabel' htmlFor="email">Email</label>
            <input type="email" className='formInput'  name='email' value={toSend.email} onChange={handleChange}/>
        </div>
        <div className="inputGroup">
            <label className='formLabel' htmlFor="message">Message</label>
            <textarea className='formInput'  name='message' value={toSend.message} onChange={handleChange}/>
        </div>
        <div className="btnDiv">
          <Btn btnTitle={btnTitle}/>
        </div>
    </form>
  )
}

export default ContactForm