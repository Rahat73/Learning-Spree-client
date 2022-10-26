import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const courseDetails = useLoaderData();
    const { title, imageURL, price } = courseDetails;

    return (
        <div className='w-7/12 mx-auto my-20'>
            <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl pb-10 pt-5'>
                <div className=' w-10/12 mx-auto flex items-center'>
                    <img className='w w-4/12 mr-10' src={imageURL} alt="checkout" />
                    <div className='text-start'>
                        <p className='text-2xl'>Product name: {title}</p>
                        <p className='text-xl'>Price: $<span className='mx-1'>{price}</span></p>
                    </div>
                </div>
                <button className='btn btn-outline btn-wide btn-secondary my-8'>Confirm</button>
            </div>
        </div>
    );
};

export default Checkout;