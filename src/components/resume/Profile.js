import React from 'react'
import ProImg from '../images/profile.jpg'
const Progile = () => {
    return (
        <>
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={ProImg} alt='Jared' />
                        <div className='btn-floating halfway-fab waves-effect wave-light red'>
                            <i className='material-icons activator'>more_vert</i>
                        </div>
                    </div>
                    <div className='card-content'>
                        <div className='text-2xl text-center activator'>
                            Jared Wu
                        </div>
                        <div className='text-center text-xl'>Full Stack web Developer</div>
                    </div>
                    <div className='card-reveal'>
                        <span className='card-title grey-text text-darken-4 items-center'>
                            Follow me
                            <i className='material-icons text-red-600 right'>close</i>
                        </span>
                        <p className='flex justify-start py-2'>

                            <a href='https://github.com/jaredwuu' target='_blank' rel="noreferrer">
                                <i className='fab fa-github px-1 grey-text text-darken-4 social-style'></i>
                            </a>

                            <a href='https://www.linkedin.com/in/jared-wu-979a53158/' target='_blank' rel="noreferrer">
                                <i className='fab fa-linkedin px-1 grey-text text-darken-4 social-style'></i>
                            </a>
                        </p>
                    </div>
                    <div className='h-full'>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Progile
