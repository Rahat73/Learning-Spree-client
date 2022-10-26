import React from 'react';

const Login = () => {
    return (
        <div className='w-5/12 mx-auto mb-20'>
            <form>
                <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl p-10'>
                    <div className="divider text-2xl">Login</div>
                    <div className='form-control w-1/2 mx-auto'>
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
        </div>
    );
};

export default Login;