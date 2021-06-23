import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {


    return (
        <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='hover:text-blue-500 brand-logo'>
                            MyCV
                        </Link>
                        <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                            <i className="material-icons hover:text-blue-500">menu</i>
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to='/' className='navbar'>
                                    <i className='fas fa-home'></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/skills' className='navbar'>
                                    <i className='fas fa-copy'></i>Skills
                                </Link>
                            </li>
                            <li>
                                <Link to='/experiences' className='navbar'>
                                    <i className='fas fa-id-badge'></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to='/educations' className='navbar'>
                                    <i className='fas fa-graduation-cap'></i>Educations
                                </Link>
                            </li>
                            <li>
                                <Link to='/porfolios' className='navbar'>
                                    <i className='fas fa-address-card'></i>Porfolios
                                </Link>
                            </li>
                            <li>
                                <Link to='/projects' className='navbar'>
                                    <i className='fas fa-file-signature'></i>Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='side-nav'>
                <li className='mobinav'>
                    <Link to='/' >
                        <i className='fas fa-home'></i>Home
                    </Link>
                </li>
                <li className='mobinav'>
                    <Link to='/skills'>
                        <i className='fas fa-copy'></i>Skills
                    </Link>
                </li>
                <li className='mobinav'>
                    <Link to='/experiences'>
                        <i className='fas fa-id-badge'></i>Experiences
                    </Link>
                </li>
                <li className='mobinav'>
                    <Link to='/educations'>
                        <i className='fas fa-graduation-cap'></i>Educations
                    </Link>
                </li>
                <li className='mobinav'>
                    <Link to='/portfolios'>
                        <i className='fas fa-address-card'></i>Portfolios
                    </Link>
                </li>
                <li className='mobinav'>
                    <Link to='/projects'>
                        <i className='fas fa-file-signature'></i>Projects
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar
