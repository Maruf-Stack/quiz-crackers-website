import React from 'react';

const SingleQuiz = ({ questions }) => {
    const { id, question, correctAnswer, option } = questions;
    console.log(questions)

    return (
        <div>
            <p className='text-center'>Please Choose Your Answer</p>

        </div>
    );
};

export default SingleQuiz;