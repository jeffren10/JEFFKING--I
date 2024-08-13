import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(10,25,47)] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full '>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
        <div className='sm:text-right text-4xl font-bold px-4'>
          <p>Hi. I'm Jeffren, nice to meet you, Please take a look around. </p>
        </div>
        <div>
          <p> I am passionate about building excellent software that impress the lives of those around me. I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.   </p><br></br>
            <p>
          I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p><br></br>
          <p>
            Here are a few technologies I've been working with recently.
            <br></br>
          <ul> 
         <li>javascript (ES6+) </li> 
         <li> HTML $ (S)CSS </li> 
         <li>React.Js  </li>
        <li>Tailwind.css </li>
            </ul>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}    

export default About
