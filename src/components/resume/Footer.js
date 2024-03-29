import React from 'react'
import { HashLink as Link} from 'react-router-hash-link';

const Footer = () => {
    var d = new Date();
    var year = d.getFullYear();
    return (
        <div>
            <footer className="page-footer light-blue darken-4 sticky bottom-0 w-full">
                <div className="container">
                    <div className="row">
                        <div className="col l4 s12 bg-blue-500">
                            <Link to='/'>
                                <h5 className='text-white hover:text-blue-500 brand-logo'>MyCV</h5>
                            </Link>
                            <span className='card-title items-center text-xl'>
                                Follow me
                            </span>
                            <p className='flex justify-start py-2'>
                                <a href='https://github.com/jaredwuu' target='_blank' rel="noreferrer">
                                    <i className='fa fa-github fa-2x px-2 py-2 rounded text-white hover:bg-black'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/jared-wu-979a53158/' target='_blank' rel="noreferrer">

                                    <i className="fa fa-linkedin-square fa-2x px-2 py-2 rounded text-white hover:bg-black"></i>
                                </a>
                            </p>
                        </div>
                        <div className='col l4 s12 bg-yellow-500 '>
                            
                        </div>
                        <div className="col l4 s12 bg-red-400">
                            <h6 className="white-text">MyProjects</h6>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Html Editor</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">ToDoApp</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {year} Copyright
                        <a className="grey-text text-lighten-4 right" href="#!">More info</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
