import React from 'react';
import './singlequiz.css'

const SingleQuiz = ({ snQuestion }) => {
    // console.log(snQuestion)
    const { id, question, correctAnswer, options } = snQuestion;
    const filter = question.slice(3, -4);
    const [op1, op2, op3, op4] = options;
    // console.log(options)

    return (
        <div className='mb-8 '>
            <div className="w-3/4 mx-auto md:w-1/2 lg:w-1/3 question"><p className='mb-6 text-xl'><span className='text-xl font-bold'>Question : </span>{filter}</p></div>
            <div className="grid gap-5 p-2 mx-auto md:grid-cols-2 options">
                <div className='p-5 sn-option'>
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label for="css" className='ml-2'>{op1}</label>
                </div>
                <div className='p-5 sn-option'>
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label for="css" className='ml-2'>{op2}</label>
                </div>
                <div className='p-5 sn-option'>
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label for="css" className='ml-2'>{op3}</label>
                </div>
                <div className='p-5 sn-option'>
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label for="css" className='ml-2'>{op4}</label>
                </div>
            </div>

        </div>
    );
};

export default SingleQuiz;