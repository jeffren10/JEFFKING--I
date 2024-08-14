
import react, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
const [setNav, nav] = useState(false) 
const handleClick = () => nav(!setNav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
      <img src={logo} alt='logo.jpg' style={{width: '50px' }} />
      </div>

      {/* menu */}
        <ul className='hidden md:flex'> 
        <li>   
      <Link 
        activeClass="active" to="home" smooth={true} duration={500}>
         Home 
        </Link>
        </li>
        
        <li> 
       <Link 
        activeClass="active" to="about" smooth={true} duration={500}>  
        About
       </Link> 
        </li>

       <li>
        <Link
        activeClass="active" to="skills" smooth={true} duration={500} >
        Skills 
        </Link> 
        </li> 

        <li> 
          <Link 
          activeClass="active" to="work" smooth={true} duration={500} >
          Work
          </Link>
          </li>

        <li>
          <Link 
          activeClass="active" to="contact" smooth={true} duration={500} >
          Contact
          </Link>
          </li>
        </ul>
     
      
      {/* hamBurger */}
      <div onClick={handleClick} className='md:hidden z-10'>
      {!setNav ? <FaBars /> : <FaTimes /> }
      </div>

      {/* mobile menu */}
      <ul className={!setNav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>  

        <li className='py-6 text-4xl'> 
          {''}
          <Link onclick={handleClick} to='home' smooth={true} duration={500}>
          Home
          </Link>
          </li> 

        <li className='py-6 text-4xl'> 
          {''}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About
          </Link>
         </li>
         
        <li className='py-6 text-4xl'>
          {''}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}> 
          Skills
          </Link>
          </li>
          
        <li className='py-6 text-4xl'>
          {''}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
          </Link>
          </li>

        <li className='py-6 text-4xl'>
          {''}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
          </Link>
          </li>
        </ul>
    


      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/isaac-jeffren-b61345308/edit/forms/position/new/?profileFormEntryPoint=PROFILE_TOP_CARD_EDIT_FORM'>
           Linkedin <FaLinkedin size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/jeffren10'>
           Github <FaGithub size={30} />
          </a>
        </li>

      

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://heyzine.com/flip-book/48dce68c6f.html'>
           Resume < BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      </div>
    </div>
  )
}

export default Navbar
