import React from 'react';
import './topic.css'

const Topic = ({ topics }) => {
    const { name, logo, total } = topics;
    return (
        <div className='grid gap-10'>
            <div className='single-topic'>
                <div className="mb-4 img">
                    <img src={logo} alt="" />
                </div>
                <div className="mb-4 font-semibold que-quantity text-x">
                    Number of Quiz : {total}

                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold'>{name}</p>
                    <button className='font-semibold quiz-btn text-x'>Start Quiz</button>
                </div>

            </div>
        </div>
    );
};

export default Topic;