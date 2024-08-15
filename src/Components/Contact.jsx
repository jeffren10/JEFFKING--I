import React, { useRef } from 'react'

const Contact = () => {
  const refForm =  useRef(null)
  const onFinish = (e) => {
    e.preventDefault();
    const form = e.target;
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let message = form.elements.message.value;
    let subject = form.elements.message.value;
    const subject1 = `${name} ${email} ${subject} ${message}`
    const mailtoUrl = `mailto:${'ijeffren1@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoUrl;
    form.reset();
  }
  return (
    <div name='contact' className='w-full md:h-screen bg-contain bg-[#0a192f] flex justify-center items-center p-4 '>
      <form onSubmit={onFinish} className='flex flex-col max-w-[600px] w-full'> 
        <div className=''> 
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact </p>
          <p className='text-gray-300 py-2'>// submit the form below or shoot me an email- ijeffren1@gmail.com </p>
        </div>
        <input htmlFor="name" className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'id='name' />
        <input htmlFor="email" className='my-1 p-2 bg-[#ccd6f6] ' type='email' placeholder='Email'id='email' name='email' />
        <input htmlFor="subject" className='my-2 p-2 bg-[#ccd6f6]' type='email' placeholder='subject' name='subject' id='subject'></input>
        <textarea htmlFor="message" className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' ></textarea>
        <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 mx-auto flex items-center'  >Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact
