import React from 'react';
import { Link } from 'react-router-dom';
import './topic.css'

const Topic = ({ topics }) => {

    const { name, logo, total, id } = topics;
    return (
        <div className='grid gap-10'>
            <div className='single-topic'>
                <div className="mb-4 img">
                    <img src={logo} alt="" />
                </div>
                <div className="mb-4 text-base font-semibold lg:text-xl que-quantity">
                    Number of Quiz : {total}

                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold'>{name}</p>
                    <Link to={`/topic/${id}`}><button className='text-sm font-semibold quiz-btn'>Start Quiz</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Topic;