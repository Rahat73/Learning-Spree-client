import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Learning-Spree-Logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-opacity-0 bg-clip-padding lg:justify-between py-5">
                <div className="mx-14">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">
                                Home
                            </Link></li>
                            <li><Link to="courses">
                                Courses
                            </Link></li>
                            <li><Link to="faq">
                                FAQ
                            </Link></li>
                            <li><Link to="blog">
                                Blog
                            </Link></li>
                            <input type="checkbox" className="toggle" />
                        </ul>
                    </div>
                    <button><img className='h-28 lg:h-40' src={logo} alt="logo" /></button>
                </div>
                <div className="navbar-center hidden lg:flex mx-20">
                    <ul className="menu menu-horizontal p-0 items-center">
                        <li><Link to="/">
                            Home
                        </Link></li>
                        <li><Link to="courses">
                            Courses
                        </Link></li>
                        <li><Link to="faq">
                            FAQ
                        </Link></li>
                        <li><Link to="blog">
                            Blog
                        </Link></li>
                        <input type="checkbox" className="toggle" />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;