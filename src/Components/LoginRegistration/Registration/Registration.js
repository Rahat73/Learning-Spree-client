import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Registration = () => {

    const [accepted, setAccepted] = useState(false);

    const { createUser, updateUserProfile, verifyEmail, googleSignInProvider, githubSignInProvider } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleTnC = event => {
        setAccepted(event.target.checked);
        console.log(event.target.checked);
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => {
                toast.error(e.message);
            });
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => {
                toast.error(e.message);
            });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log('result.user', user);
                    form.reset();
                    handleUpdateUserProfile(name, photoURL);
                    handleEmailVerification();
                    toast.success('Check your e-mail & verify.');
                })
                .catch(e => {
                    toast.error(e.message);
                });
        }
        else {
            toast.error("Confirm Password doesn't match")
        }
    }



    const handleGoogleSignIn = () => {
        googleSignInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log('result.user', user);
            })
            .catch(e => {
                toast.error(e.message);
            });
    }

    const handleGithubSignIn = () => {
        githubSignInProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log('result.user', user);
            })
            .catch(e => {
                toast.error(e.message);
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
                            <div className="form-control mt-3">
                                <label className="cursor-pointer label justify-start">
                                    <input onClick={handleTnC} type="checkbox" className="checkbox checkbox-accent mr-2" />
                                    <span className="label-text">Accept <Link className='text-amber-400' to="/T&C">Terms & Conditions</Link></span>
                                </label>
                            </div>
                            <div>
                                <button className='btn btn-wide btn-outline btn-secondary mt-10 mb-5' type='submit' disabled={!accepted}>Register</button>
                            </div>

                        </div>
                    </div>
                </form>
                <div className="divider text-lg">OR</div>
                <div className='flex justify-evenly'>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary'><FaGoogle className='mr-2 text-lg'></FaGoogle> SignIn with Google</button>
                    <button onClick={handleGithubSignIn} className='btn btn-outline btn-secondary'><FaGithub className='mr-2 text-lg'></FaGithub> SignIn with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;