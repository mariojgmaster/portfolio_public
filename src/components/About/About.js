/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 30/07/2022 - 17:09:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/07/2022
    * - Author          : mario
    * - Modification    : 
**/

import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}</p>
                    <br/><br/>
                    <p style={{color:theme.tertiary80}}>{aboutData.description2}</p>
                    <br/><br/>
                    <p style={{color:theme.tertiary80}}>{aboutData.description3}</p>
                    <br/><br/>
                    <p style={{color:theme.tertiary80}}>{aboutData.description4}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
