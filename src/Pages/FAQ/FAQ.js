import React, { useEffect } from 'react';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='w w-4/5 mx-auto my-14 text-start'>
            <div>
                <h1 className='text-2xl font-semibold my-3'>What is the purpose of the react router?</h1>
                <p className='px-3'>-- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-3'>How does Context API work?</h1>
                <p className='px-3'>-- The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-3'>What is the useRef?</h1>
                <p className='px-3'>-- The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. useRef() only returns one item. It returns an Object called current.

                    When we initialize useRef we set the initial value: useRef(0).</p>
            </div>
        </div>
    );
};

export default FAQ;