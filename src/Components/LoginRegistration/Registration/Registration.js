import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Registration = () => {
    return (
        <div>
            <div className='w-5/12 mx-auto mb-20'>
                <form>
                    <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl p-10'>
                        <div className="divider text-2xl">Registration</div>
                        <div className='form-control w-1/2 mx-auto'>
                            <label className="label">
                                <span className="label-text text-lg text-start">Name</span>
                            </label>
                            <input type="text" name='user-name' placeholder="Enter your name" className="input input-bordered w-full max-w-xs" required />
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full max-w-xs" required />
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full max-w-xs" required />
                            <label className="label">
                                <span className="label-text text-lg">Confirm password</span>
                            </label>
                            <input type="password" name='confirm-password' placeholder="Confirm your password" className="input input-bordered w-full max-w-xs" required />
                            <div>
                                <button className='btn btn-wide btn-outline btn-secondary mt-10 mb-5' type='submit'>Login</button>
                            </div>

                        </div>
                    </div>
                </form>
                <div className="divider text-lg">OR</div>
                <div className='flex justify-evenly'>
                    <button className='btn btn-outline btn-secondary'>SignUp with Google <FaGoogle className='ml-2 text-lg'></FaGoogle></button>
                    <button className='btn btn-outline btn-secondary'>SignUp with GitHub <FaGithub className='ml-2 text-lg'></FaGithub></button>
                </div>
            </div>
        </div>
    );
};

export default Registration;