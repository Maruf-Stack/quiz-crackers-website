import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './home.css';

const Home = () => {
    const quizs = useLoaderData();

    const allQuiz = quizs.data;


    return (
        <div>
            <div className="banner">
                <div className="banner-title">

                    <div className='text-xl font-semibold'>
                        <div className='mb-5'>
                            <p className='text-4xl font-bold welcome'>Welcome to our Quiz community</p>
                        </div>
                        <div className="des">
                            Here We make some quiz for your.That will help to know about programming.This site is very<br></br> helpfull for a programmer.
                            And programmer can get help and support for any problem<br></br> from here.Start your journey with us.
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-12 mt-10 ml-3 mr-3 md:ml-20 md:mr-20 quiz-container lg:grid-cols-3 md:grid-cols-2">
                {
                    allQuiz.map(topics => <Topic key={topics.id} topics={topics} ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;