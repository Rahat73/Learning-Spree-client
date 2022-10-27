import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, googleSignInProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('normal', user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
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
                console.log('google', user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(e => {
                setError(e.message);
                toast.error(error);
            });
    }

    return (
        <div className='w-11/12 md:w-8/12 lg:w-5/12 mx-auto mb-20'>
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
            <form onSubmit={handleSubmit}>
                <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl p-10'>
                    <div className="divider text-2xl">Login</div>
                    <div className='form-control w-3/4 lg:w-1/2 mx-auto'>
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full max-w-xs" required />
                        <div>
                            <button className='btn btn-wide btn-outline btn-secondary mt-10 mb-5' type='submit'>Login</button>
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
    );
};

export default Login;