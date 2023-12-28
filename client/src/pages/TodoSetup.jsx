import React, { useState } from 'react'

export default function TodoSetup() {
  const [task, setTask] = useState([]);

  return (
    <div className='container'>
      <div className=' bg-black text-white p-2'><h2>Hello Avik</h2></div>
      <div className='h-screen flex justify-center items-center bg-black text-white'>


        <div className=' flex justify-center items-center text-center flex-col'>
          <div className="flex flex-row">
            <input
              type="text"
              className='bg-gray-800 mb-2 p-2 text-white border w-64 border-gray-700 rounded'
              placeholder="Add Task"
            />
            <button className='bg-blue-500 text-white px-4 py-2 m-1 rounded '>ADD</button>

          </div>
        <div className=' flex justify-center items-center text-center flex-col mt-2'>
            <h2 className='bg-blue-500 text-white px-4 py-2 w-64 rounded flex '>Helow</h2>
          </div>

        </div>

      </div>
    </div>

  )
}
