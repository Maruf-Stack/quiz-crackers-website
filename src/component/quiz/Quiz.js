import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../single quiz/SingleQuiz';


const Quiz = () => {
    const quiz = useLoaderData();
    const name = quiz.data.name;
    const allquestions = quiz.data.questions;
    // console.log(allquestions)

    return (
        <div>
            <p className='mt-5 mb-10 text-2xl font-bold text-center'>Topic name - {name}</p>
            {
                allquestions.map(snQuestion => <SingleQuiz key={snQuestion.id} snQuestion={snQuestion}></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;