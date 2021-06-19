import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [checked, setChecked] = useState(false)
    const onClick = () => {
        setChecked(!checked);
        console.log(checked);
    }

    return (
        <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='flex justify-between'>
                        <Link to='/' className='hover:text-blue-500'>
                            MyCV
                        </Link>
                        <button onClick={onClick} className="md:hidden hover:select-none hover:text-blue-500 transform hover:scale-110 items-center block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" fill="currentColor"></path>
                            </svg>
                        </button>
                        <div className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'>
                            <div >
                                <Link to='/' className='hover:text-blue-500 px-2 items-center'>
                                    <i className='fas fa-home'></i>
                                    Home
                                </Link>
                                <Link to='/skills' className='navbar'>

                                    <i className='fas fa-copy'></i>
                                    Skills
                                </Link>
                                <Link to='/experiences' className='navbar'>
                                    <i className='fas fa-id-badge'></i>
                                    Experiences
                                </Link>
                                <Link to='/educations' className='navbar'>
                                    <i className='fas fa-graduation-cap'></i>
                                    Educations
                                </Link>
                                <Link to='/portfolios' className='navbar'>
                                    <i className='fas fa-address-card'></i>
                                    Portfolios
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={checked ? "hidden" : ""}>
                <ul className={`md:hidden over:select-onne transform items-center block`}>
                    <li className='mobinav'>
                        <Link to='/' >
                            <i className='fas fa-home'></i>
                            Home
                        </Link>
                    </li>
                    <li className='mobinav'>

                        <Link to='/skills'>

                            <i className='fas fa-copy'></i>
                            Skills
                        </Link>

                    </li>
                    <li className='mobinav'>

                        <Link to='/experiences'>
                            <i className='fas fa-id-badge'></i>
                            Experiences
                        </Link>

                    </li>
                    <li className='mobinav'>
                        <Link to='/educations'>
                            <i className='fas fa-graduation-cap'></i>
                            Educations
                        </Link>
                    </li>
                    <li className='mobinav'>
                        <Link to='/portfolios'>
                            <i className='fas fa-address-card'></i>
                            Portfolios
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Navbar
