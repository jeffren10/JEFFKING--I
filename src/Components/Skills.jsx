import React from 'react';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/JS.png';
import REACT from '../assets/REACT.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>  
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'> These are the technologies I've worked with </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt='HTML.png' className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt='CSS.png' className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={JS} alt='Js.png' className='w-20 mx-auto' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={REACT} alt='REACT.png' className='w-20 mx-auto' />
            <p className='my-4'>REACT</p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Skills

