import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://learning-spree-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl py-5'>
            <h1 className='font-semibold text-xl'>Course List</h1>
            <div className="divider mb-10"></div>
            {
                courses.map(course => <p className='pb-7 text-lime-200 hover:text-lime-600' key={course.id}>
                    <Link to={`/courses/${course.id}`}>{course.title}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;