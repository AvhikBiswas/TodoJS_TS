import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-black text-white'>
      <div className='flex flex-col justify-center items-center text-center'>
        <input
          type="text"
          className='bg-gray-800 mb-2 p-2 text-white border border-gray-700 rounded'
          placeholder="Username"
        />
        <input
          type="text"
          className='bg-gray-800 mb-2 p-2 text-white border border-gray-700 rounded'
          placeholder="Password"
        />
        <div className='flex justify-center items-center'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded mr-1'>Login</button>
          <Link to='SignUp'>
             <button className='bg-blue-500 text-white px-4 py-2 rounded flex '>Signup</button>
          </Link>
        </div>
      </div >



    </div>
  );
}
