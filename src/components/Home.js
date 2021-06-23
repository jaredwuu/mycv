import React from 'react'
import Porfolios from './Porfolios'
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Educations from './Educations'

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
                        <Experiences />
                        <Educations />
                        <Porfolios />                       
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home
