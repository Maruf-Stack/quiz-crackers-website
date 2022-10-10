import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between mt-8'>
                <div className='title'>
                    <p className='text-3xl font-bold'>Quiz For Programmer</p>
                </div>
                <div className=" nav">
                    <Link to='/home'>Home</Link>
                    <Link>Topic</Link>
                    <Link>Statistic</Link>
                    <Link>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
