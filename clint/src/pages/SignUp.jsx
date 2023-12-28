import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='flex justify-center items-center h-screen bg-black text-white'>
            <div className='flex flex-col justify-center text-center items-center'>
                <input
                    className='bg-gray-800 mb-2 p-2 text-white border border-gray-700 rounded'
                    type="text"
                    placeholder='username'
                />
                <input className='bg-gray-800 mb-2 p-2 text-white border border-gray-700 rounded'
                    type="text"
                    placeholder='new password' />
                <div className='flex flex-row'>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded mr-1'
                    >Submit</button>
                    <Link to='/'>
                        <button
                            className='bg-blue-500 text-white px-4 py-2 rounded mr-1'
                        >Login</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}
