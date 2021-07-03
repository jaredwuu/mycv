import React from 'react'
import Dropdown from '../plug-in/Dropdown'
import CustomTextInput from '../plug-in/CustomTextInput'

const Projects = () => {
    return (
        <div className='container'>
            <Dropdown />
            <div className='right text-center'>
                <a href="https://app.testdome.com/cert/4152020f95e6417392bd6dbee52ebe6f" className="testdome-certificate-stamp gold text-center"><span className="testdome-certificate-name">Jiachao Wu</span><span className="testdome-certificate-test-name">React </span><span className="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
            </div>
            <div>
                <p className=''> 
                    Hello
                </p>
            </div>
            <CustomTextInput />
        </div>

    )
}

export default Projects
