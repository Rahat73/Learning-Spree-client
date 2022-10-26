import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const [error, setError] = useState('');
    const { createUser, googleSignInProvider } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('result.user', user);
                form.reset();
            })
            .catch(e => {
                setError(e.message);
                toast.error(error);
            });
    }



    const handleGoogleSignIn = () => {
        googleSignInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                //console.log('result.user', user);
            })
            .catch(e => {
                setError(e.message);
                toast.error(error);
            });
    }


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='w-11/12 md:w-8/12 lg:w-5/12 mx-auto mb-20'>
                <form onSubmit={handleSubmit}>
                    <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl p-10'>
                        <div className="divider text-2xl">Registration</div>
                        <div className='form-control w-3/4 lg:w-1/2 mx-auto'>
                            <label className="label">
                                <span className="label-text text-lg text-start">Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="Enter your name" className="input input-bordered w-full max-w-xs" required />
                            <label className="label">
                                <span className="label-text text-lg text-start">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered w-full max-w-xs" />
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
                            <input type="password" name='confirmPassword' placeholder="Confirm your password" className="input input-bordered w-full max-w-xs" required />
                            <div>
                                <button className='btn btn-wide btn-outline btn-secondary mt-10 mb-5' type='submit'>Register</button>
                            </div>

                        </div>
                    </div>
                </form>
                <div className="divider text-lg">OR</div>
                <div className='flex justify-evenly'>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary'><FaGoogle className='mr-2 text-lg'></FaGoogle> SignIn with Google</button>
                    <button className='btn btn-outline btn-secondary'><FaGithub className='mr-2 text-lg'></FaGithub> SignIn with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;