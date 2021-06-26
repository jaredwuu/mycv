import React from 'react'
import Porfolios from './Porfolios'
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Educations from './Educations'
import Footer from './Footer'

const Home = () => {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m4 l3'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 l9'>
                        <About />
                        <Skills />
                        
                        <Educations />
                        <Porfolios />                      
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home
