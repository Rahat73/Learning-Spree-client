import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiDownload, HiOutlineCurrencyDollar, HiStar, HiUsers } from "react-icons/hi";

const CourseDetails = () => {

    const courseDetails = useLoaderData();
    const { title, imageURL, price, rating, subtitle, description, enrolled } = courseDetails;

    return (
        <div className='w-7/12 mx-auto'>
            <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl pb-10 pt-5'>
                <div className='flex justify-between px-6'>
                    <h1 className='font-semibold text-xl'>{title}</h1>
                    <button><HiDownload className='text-2xl'></HiDownload></button>
                </div>
                <div className="divider mb-10"></div>
                <div className='w-11/12 mx-auto'>
                    <div className='flex flex-col items-center'>
                        <img className='w w-2/4' src={imageURL} alt="course" />
                        <h1 className='font-semibold text-xl text-left my-5'>{subtitle}</h1>
                    </div>
                    <p className='text-start'>{description}</p>
                    <div className='flex justify-around my-6'>
                        <div className='flex'><HiOutlineCurrencyDollar className='text-3xl mx-2'></HiOutlineCurrencyDollar><span>{price}</span></div>
                        <div className='flex'><HiStar className='text-3xl mx-2'></HiStar><span>{rating}</span></div>
                        <div className='flex'><HiUsers className='text-3xl mx-2'></HiUsers><span>{enrolled}</span></div>
                    </div>
                    <button className='btn btn-outline btn-wide btn-secondary'>Enroll Now !!</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;