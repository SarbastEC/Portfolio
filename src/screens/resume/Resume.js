import React, {useState} from 'react';
import './Resume.css';
import {FaHandPointRight} from 'react-icons/fa';

const Resume = () => {

  const [activeContentBody, setActiveContentBody] = useState(true);

  return (
    <div className='resume' id='reusme'
    style={{
      marginTop: activeContentBody ? "3rem" : "5rem",
      marginBottom: activeContentBody ? "3rem" : "5rem",
    }}
    >
      <div className="content">
        <div className="contentTitle">
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
              <div className='educationItem'>
                <div className='flexedDiv'>
                  {/* <div className="listPoint"></div> */}
                  <FaHandPointRight className="listPoint"/>
                  <h4 className='educationItemTitle'>EC Utbildning, Västerås</h4>
                </div>
                <div>
                  <p className='educationItemPeriod'>2020/08 – pågående</p>
                </div>
                <div>
                  <p className='educationItemDesc'>Webb- & Frontendutvecklare</p>
                </div>
              </div>
              <div className='educationItem'>
                <div className='flexedDiv'>
                  {/* <div className="listPoint"></div> */}
                  <FaHandPointRight className="listPoint"/>
                  <h4 className='educationItemTitle'>Damascus University, Syrien</h4>
                </div>
                <div>
                  <p className='educationItemPeriod'>2008 – 2010</p>
                </div>
                <div>
                  <p className='educationItemDesc'>Ekonomiprogrammet</p>
                </div>
              </div>
              <div className='educationItem'>
                <div className='flexedDiv'>
                  {/* <div className="listPoint"></div> */}
                  <FaHandPointRight className="listPoint"/>
                  <h4 className='educationItemTitle'>Ekonomiprogrammet</h4>
                </div>
                <div>
                  <p className='educationItemPeriod'>2005 – 2007</p>
                </div>
                <div>
                  <p className='educationItemDesc'>Aktiekunskap, Associate Bachelor Certificate</p>
                </div>
              </div>
            </div>
            :
            <div className="workHistory">
              <div className='workItem'>
                <div className="firstRow">
                  <div className='flexedDiv'>
                    {/* <div className="listPoint"></div> */}
                    <FaHandPointRight className="listPoint"/>
                    <h4 className='workItemTitle'>Lärarassistent</h4>
                  </div>
                  <div>
                    <p className='workItemPlace'>Vikarieförmedlingen, Västerås</p>
                  </div>
                  <div>
                    <p className='workItemPeriod'>2018 – 2020</p>
                  </div>
                </div>
                <div className='secondRow'>
                  <p className='workItemDesc'>Arbetade som resurs till skolverksamheten i förskola, förskoleklass, fritidshem & grundskola 1-9.</p>
                </div>
              </div>
              <div className='workItem'>
                <div className="firstRow">
                  <div className='flexedDiv'>
                    {/* <div className="listPoint"></div> */}
                    <FaHandPointRight className="listPoint"/>
                    <h4 className='workItemTitle'>Lärarassistent</h4>
                  </div>
                  <div>
                    <p className='workItemPlace'>Hermods AB, Västerås</p>
                  </div>
                  <div>
                    <p className='workItemPeriod'>2016 – 2018</p>
                  </div>
                </div>
                <div className='secondRow'>
                  <p className='workItemDesc'>Undervisade i grundläggande moduler för målgruppen nyanlända, i svenska språket och datakunskaper.</p>
                </div>
              </div>
              <div className='workItem'>
                <div className="firstRow">
                  <div className='flexedDiv'>
                    {/* <div className="listPoint"></div> */}
                    <FaHandPointRight className="listPoint"/>
                    <h4 className='workItemTitle'>Revisor</h4>
                  </div>
                  <div>
                    <p className='workItemPlace'>Jordbruksdepartementet, Syrien</p>
                  </div>
                  <div>
                    <p className='workItemPeriod'>2012 – 2013</p>
                  </div>
                </div>
                <div className='secondRow'>
                  <p className='workItemDesc'>Kontrollerade bokföringen, fakturahantering, uträkningar av utbetalning, moms m.m., Skrev ekonomiska rapporter och sammanställde budget en gång i månaden.</p>
                </div>
              </div>
              <div className='workItem'>
                <div className="firstRow">
                  <div className='flexedDiv'>
                    {/* <div className="listPoint"></div> */}
                    <FaHandPointRight className="listPoint"/>
                    <h4 className='workItemTitle'>Revisor</h4>
                  </div>
                  <div>
                    <p className='workItemPlace'>National Union of Syrian Students, Syrien</p>
                  </div>
                  <div>
                    <p className='workItemPeriod'>2009-2012</p>
                  </div>
                </div>
                <div className='secondRow'>
                  <p className='workItemDesc'>Kontrollerade organisationens bokföring, som hade kontor i flera städer hela landet över.</p>
                </div>
              </div>
              <div className='workItem'>
                <div className="firstRow">
                  <div className='flexedDiv'>
                    {/* <div className="listPoint"></div> */}
                    <FaHandPointRight className="listPoint"/>
                    <h4 className='workItemTitle'>Ekonomiassistent</h4>
                  </div>
                  <div>
                    <p className='workItemPlace'>National Union of Syrian Students, Syrien</p>
                  </div>
                  <div>
                    <p className='workItemPeriod'>2006 – 2009</p>
                  </div>
                </div>
                <div className='secondRow'>
                  <p className='workItemDesc'>Hjälpte revisorn med att kontrollera bokföringen, skrev ekonomiska månadsrapporter samt budgetrapporter.</p>
                </div>
              </div>
            </div>

          }

        </div>
      </div>
    </div>
  )
}

export default Resume