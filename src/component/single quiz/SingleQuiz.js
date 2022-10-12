import React from 'react';
import './singlequiz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEarDeaf } from '@fortawesome/free-solid-svg-icons';


const SingleQuiz = ({ snQuestion }) => {
    // console.log(snQuestion)
    const { question, correctAnswer, options } = snQuestion;
    const filter = question.slice(3, -4);
    const [op1, op2, op3, op4] = options;
    const right = correctAnswer;
    const notify1 = () => toast("Wow!Correct answer");
    const notify2 = () => toast("Wrong answer!");
    const notify3 = () => {
        toast(`Right answer is -
        ${right}`)
    };
    const selectOption = (option) => {
        if (option === right) {
            notify1();

        }
        else {
            notify2()
        }
    };





    // console.log(options)

    return (
        <div className='mb-8 '>
            <div className="w-3/4 mx-auto md:w-1/2 lg:w-1/3 question"><p className='mb-6 text-xl'><span className='text-xl font-bold'>Question : </span>{filter} <FontAwesomeIcon icon={faEye} className="ml-5 text-blue-700 icon" onClick={notify3}></FontAwesomeIcon></p> </div>
            <div className="grid gap-5 p-4 mx-auto md:grid-cols-2 options ">
                <div className='p-5 sn-option' onClick={() => selectOption(op1)}>


                    <label className='ml-2' >1. {op1}</label>
                </div>
                <div className='p-5 sn-option' onClick={() => selectOption(op2)}>

                    <label className='ml-2' >2. {op2}</label>
                </div>
                <div className='p-5 sn-option' onClick={() => selectOption(op3)}>

                    <label className='ml-2' >3. {op3}</label>
                </div>
                <div className='p-5 sn-option' onClick={() => selectOption(op4)}>

                    <label className='ml-2' >4. {op4}</label>
                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default SingleQuiz;