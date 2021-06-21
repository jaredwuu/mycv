import React from 'react'
import Portfolios from './Porfolios'
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
const Home = () => {
    return (
        <section>            
            <div className='container'>
                <div className='col s12 m4 l3'>
                    <Profile />
                </div>
                <div className='col s12 m8 l9'>
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Portfolios />
                </div>

            </div>
        </section>
     
    )
}

export default Home
