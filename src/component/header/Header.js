import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-8 mb-5'>
                <div className='title'>
                    <p className='text-4xl font-bold'>Quiz <span className='italic for'>For</span> Programmer</p>
                </div>
                <div className="font-semibold nav">
                    <Link to='/home'>Home</Link>
                    <Link to='/topic'>Topic</Link>
                    <Link>Statistic</Link>
                    <Link>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
