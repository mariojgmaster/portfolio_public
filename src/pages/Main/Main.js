/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 24/07/2022 - 17:51:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2022
    * - Author          : mario
    * - Modification    : 
**/

import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Navbar, Footer, Landing, About, Skills, Contacts,
    // Testimonials, Blog, Education, Experience, Projects, Services, Achievement
} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            {/* <Education /> */}
            {/* <Projects /> */}
            {/* <Achievement /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
