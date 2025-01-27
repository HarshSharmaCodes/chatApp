import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx';

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp
                    <span className='text-purple-500'> ChatApp</span>
                </h1>
                <form action="" method="get">
                    <div>
                        <label className='label p-2'>
                            <span className='text-black text-balance label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='eg.,John Leo' className='w-full input input-bordered h-10'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-black text-balance label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='john@123' className='w-full input input-bordered h-10'></input>
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-black text-balance label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-black text-balance label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Re-Enter Your Password' className='w-full input input-bordered h-10' />
                    </div>
                    <a href="#" className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?</a>
                        <GenderCheckbox/>
                        <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'> Sign Up </button>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;