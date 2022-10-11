import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './statistic.css'

const Stratistic = () => {
    const quizCon = useLoaderData();
    const allQuiz = quizCon.data;
    const data = allQuiz;


    return (
        <div className='md:ml-10 md:mt-10'>
            <LineChart className='chart' width={400}
                height={400}
                data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Stratistic;