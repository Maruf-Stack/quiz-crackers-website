import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div className='ml-4 mr-4 md:mt-16 md:ml-20 md:mr-20'>
            <div className='mb-8 que'>
                <p className='mb-3 text-2xl'><span className='text-3xl font-semibold'>Question 1: </span>What is the purpose of React Router?</p>
                <p><span className='text-xl font-semibold'>Answer </span>: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='mb-8 que'>
                <p className='mb-3 text-2xl'><span className='text-3xl font-semibold'>Question 2: </span>How does Context API works?</p>
                <p><span className='text-xl font-semibold'>Answer </span>: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on</p>
            </div>
            <div className='mb-8 que'>
                <p className='mb-3 text-2xl'><span className='text-3xl font-semibold'>Question 3: </span>What is useRef?</p>
                <p><span className='text-xl font-semibold'>Answer : </span>UseRef is like a “box” that can hold a mutable value in its.useRef() creates a plain JavaScript object.It is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.</p>
            </div>
        </div>
    );
};

export default Blog;