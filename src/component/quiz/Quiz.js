import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../single quiz/SingleQuiz';


const Quiz = () => {
    const quiz = useLoaderData();

    const questions = quiz.data.questions;
    return (
        <div>
            {
                questions.map(question => <SingleQuiz key={question.id} questions={questions}></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;