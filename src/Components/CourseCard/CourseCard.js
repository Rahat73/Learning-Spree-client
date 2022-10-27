import React from 'react';
import { HiOutlineCurrencyDollar, HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {
    const { id, title, imageURL, price, rating, subtitle } = course;
    return (
        <div>
            <div className="card bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl hover:shadow-inner hover:shadow-black">
                <figure className="px-10 pt-10">
                    <img src={imageURL} alt="cardImage" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p>{subtitle}</p>
                    <div className="pt-5 card-actions justify-between items-center">
                        <div>
                            <div className='flex'><HiOutlineCurrencyDollar className='text-3xl text-amber-200 mx-2'></HiOutlineCurrencyDollar><span>{price}</span></div>
                            <div className='flex'><HiStar className='text-3xl text-warning mx-2'></HiStar><span>{rating}</span></div>
                        </div>
                        <Link to={`/courses/${id}`}>
                            <button className="btn btn-outline btn-secondary btn-sm lg:btn-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;         