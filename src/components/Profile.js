import React from 'react'
import Logo from './images/logo.jpg'
const Progile = () => {
    return (
        <>
            <div>
                <div className='card w-52 h-48'>
                    <div className='card-image'>
                        <img className='' src={Logo} alt='Jared}' />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m3 ">
                    <div class="card-panel green">
                        <img src={Logo} alt='Jared}' />
                    </div>
                    <div class="card-panel green">
                        <img src={Logo} alt='Jared}' />
                    </div>
                    <div class="card-panel green">
                        <img src={Logo} alt='Jared}' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progile
