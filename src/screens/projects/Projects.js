import React from 'react';
import './Projects.css';
import CvAngular from '../../assets/images/digitalt-cv-angular.png';
import CvReact from '../../assets/images/portfolio-react.png';
import EcommerceVue from '../../assets/images/ecommerce-vue.png';
import EcommerceReact from '../../assets/images/ecommerce-react.png';
import EcommerceMongoDb from '../../assets/images/ecommerce-db-mongo.jpg';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';
import {AiFillGithub} from 'react-icons/ai';
import LinkImg from '../../assets/images/linkImg.svg';

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='projects' id='projects'>
      <div className="projectsContainer">
        <div className='titleWrap'>
          <h3>MINA PROJEKT i GITHUB</h3>
          <img src={LinkImg} alt="" className='linkImg'/>
        </div>
        <div className="cardsGroup">
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/Portfolio"
          >
            <img src={CvReact} alt="" />
            <p>Portfolio i React</p>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/JavaScript-3/tree/master/react-eCommerce/eCommerce-app"
          >
            <img src={EcommerceReact} alt="" />
            <p>e-Commerce webbsida i React</p>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/JavaScript-3/tree/master/react-eCommerce/eCommerce_db"
          >
            <img src={EcommerceMongoDb} alt="" />
            <p>e-Commerce database i node.js med med MongoDb</p>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/Javascript-2/tree/master/eCommerce-app"
          >
            <img src={EcommerceVue} alt="" />
            <p>e-Commerce webbsida i Vue</p>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/JavaScript-3/tree/master/angular-Digitalt%20CV"
          >
            <img src={CvAngular} alt="" />
            <p>Digitalt-CV i Angular</p>
            <AiFillGithub className='githubIcon'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects