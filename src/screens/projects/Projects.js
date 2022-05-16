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
          <h2>MINA PROJEKT i GITHUB</h2>
          <img src={LinkImg} alt="" className='linkImg'/>
        </div>
        <div className="cardsGroup">
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/Portfolio"
          >
            <img src={CvReact} alt="" />
            <h4>Portfolio i React</h4>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/JavaScript-3/tree/master/react-eCommerce/eCommerce-app"
          >
            <img src={EcommerceReact} alt="" />
            <h4>e-Commerce webbsida i React</h4>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/JavaScript-3/tree/master/react-eCommerce/eCommerce_db"
          >
            <img src={EcommerceMongoDb} alt="" />
            <h4>e-Commerce database i node.js med med MongoDb</h4>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/Javascript-2/tree/master/eCommerce-app"
          >
            <img src={EcommerceVue} alt="" />
            <h4>e-Commerce webbsida i Vue</h4>
            <AiFillGithub className='githubIcon'/>
          </a>
          <a className="card" 
          style={{border: darkMode? "3px solid var(--light-bg)" : "3px solid var(--dark-bg)", color: darkMode ? "var(--white-text)" : "var(--black-text)"}}
          href="https://github.com/SarbastEC/JavaScript-3/tree/master/angular-Digitalt%20CV"
          >
            <img src={CvAngular} alt="" />
            <h4>Digitalt-CV i Angular</h4>
            <AiFillGithub className='githubIcon'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects