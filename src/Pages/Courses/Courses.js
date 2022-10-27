import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Components/CourseCard/CourseCard';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Courses = () => {

    const allCourses = useLoaderData();

    return (
        <div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-7'>
                <div className='col-span-2 md:col-span-1'><Sidebar></Sidebar></div>
                <div className='col-span-2 md:col-span-3'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            allCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;