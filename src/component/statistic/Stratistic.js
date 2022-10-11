import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stratistic = () => {
    const quizCon = useLoaderData();
    const allQuiz = quizCon.data;
    const data = allQuiz;


    return (
        <div className='md:ml-10 md:mt-10'>
            <LineChart width={500}
                height={300}
                data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Stratistic;