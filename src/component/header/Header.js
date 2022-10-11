import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='md:flex md:items-center md:justify-between md:mt-8 md:mb-5 header'>
                <div className='title'>
                    <p className='text-4xl font-bold'>Quiz <span className='italic for'>For</span> Programmer</p>
                </div>
                <div className="font-semibold nav">
                    <Link to='/home'>Home</Link>
                    <Link to='topic'>Topic</Link>
                    <Link to='/statistic'>Statistic</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;
