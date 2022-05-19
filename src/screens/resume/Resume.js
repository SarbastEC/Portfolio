import React, {useState} from 'react';
import './Resume.css';
import {FaHandPointRight} from 'react-icons/fa';

const educations = [
  {title: 'EC Utbildning, Västerås', period: '2020/08 – pågående', desc: 'Webb- & Frontendutvecklare'},
  {title: 'Damascus University, Syrien', period: '2008 – 2010', desc: 'Ekonomiprogrammet'},
  {title: 'Commercial Institute in Damascus', period: '2005 – 2007', desc: 'Aktiekunskap, Associate Bachelor Certificate'}
]

const works = [
  {title:'Lärarassistent', place:'Vikarieförmedlingen, Västerås', period:'2018 – 2020', desc:'Arbetade som resurs till skolverksamheten i förskola,förskoleklass, fritidshem & grundskola 1-9.'},
  {title:'Lärarassistent', place:'Hermods AB, Västerås', period:'2016 – 2018', desc:'Undervisade i grundläggande moduler för målgruppennyanlända, i svenska språket och datakunskaper.'},
  {title:'Revisor', place:'Jordbruksdepartementet, Syrien', period:'2012 – 2013', desc:'Kontrollerade bokföringen, fakturahantering, uträkningar avutbetalning, moms m.m.'},
  {title:'Revisor', place:'National Union of Syrian Students, Syrien', period:'2009 - 2012', desc:'Kontrollerade organisationens bokföring, som hade kontor iflera städer hela landet över.'},
  {title:'Ekonomiassistent', place:'National Union of Syrian Students, Syrien', period:'2006 – 2009', desc:'Hjälpte revisorn med att kontrollera bokföringen, skrevekonomiska månadsrapporter samt budgetrapporter.'}
]

const Resume = () => {

  const [activeContentBody, setActiveContentBody] = useState(true);

  return (
    <div className='resume' id='reusme'>
      <div className="resumeContent">
        <div className="contentTitles">
          <h3 className='educationTitle'
          style={{
            background: activeContentBody ? "" : "var(--orange)",
            cursor: activeContentBody ? "" : "pointer"
          }}
          onClick={() => setActiveContentBody(true)}
          >
            UTBILDNING
          </h3>
          <h3 className='workTitle'
          style={{
            background: activeContentBody ? "var(--orange)" : "",
            cursor: activeContentBody ? "pointer" : ""
          }}
          onClick={() => setActiveContentBody(false)}
          >
            ARBETSLIV
          </h3>
        </div>
        <div className="contentBody">

          {
            activeContentBody 
            ? 
            <div className="education">
            {
              educations&&educations.map((education, index) => (
                <div className='educationItem' key={index}>
                  <div className='flexedDiv'>
                    {/* <div className="listPoint"></div> */}
                    <FaHandPointRight className="listPoint"/>
                    <p className='educationItemTitle'>{education.title}</p>
                  </div>
                  <div>
                    <p className='educationItemPeriod'>{education.period}</p>
                  </div>
                  <div>
                    <p className='educationItemDesc'>{education.desc}</p>
                  </div>
                </div>
              ))
            }
            </div>
            :
            <div className="workHistory">
              {
                works&&works.map((work, index) => (
                  <div className='workItem' key={index}>
                    <div className="firstRow">
                      <div className='flexedDiv'>
                        {/* <div className="listPoint"></div> */}
                        <FaHandPointRight className="listPoint"/>
                        <p className='workItemTitle'>{work.title}</p>
                      </div>
                      <div>
                        <p className='workItemPlace'>{work.place}</p>
                      </div>
                      <div>
                        <p className='workItemPeriod'>{work.period}</p>
                      </div>
                    </div>
                    <div className='secondRow'>
                      <p className='workItemDesc'>{work.desc}.</p>
                    </div>
                  </div>
                ))
              }
            </div>

          }

        </div>
      </div>
    </div>
  )
}

export default Resume