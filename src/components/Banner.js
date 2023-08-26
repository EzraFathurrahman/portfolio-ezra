import React from 'react';

import Image from '../assets/avatar.svg';
import {FaGithub,FaYoutube,FaDribbble,FaLinkedin} from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';

import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className="container mx-auto ">
      <div className='flex flex-col  gap-y-8 lg:items-center lg:flex-row lg:gap-x-12'>
        
    {/* text */}
    
    <div className='flex-1 text-center font-secondary lg:text-left '>
      <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport= {{once:false, amount:0.7 }} className='text-[30px] font-semibold leading-[0.8] lg:text-[50px] uppercase'>
        Hi im  <br /><span className='text-[50px] lg:text-[110px] font-secondary font-semibold uppercase leading-[1] '>Ezra</span>
      </motion.h1>
      <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport= {{once:false, amount:0.7 }}className='mb-6 text-[30px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
        <span className='text-white mr-4'>I am a</span>
        <TypeAnimation  sequence={['Web Developer',2000,'Passionate Hustler',2000,'Fulltime Learner', 2000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity}>
        </TypeAnimation>
      </motion.div>
      <motion.p variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport= {{once:false, amount:0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>A computer science graduate. Experienced in working with a variety of technology and software solutions. I have interest in Website Development especially in backend and fullstack Development.
    </motion.p>
    <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport= {{once:false, amount:0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      <a href="https://wa.me/0895800283076">
      <button className='btn btn-lg'>
      Contact me
      </button>
      </a>
      
      <a href="#work" className='text-gradient btnk-link'>My Portfolio</a>
    </motion.div>
    {/* socials */}
    <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport= {{once:false, amount:0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
      
      <a href="https://github.com/EzraFathurrahman" >
        <FaGithub className='text-4xl'/>
      </a>
      <a href="https://www.linkedin.com/in/muhammad-ezra">
        <FaLinkedin className='text-4xl'/>
      </a>
    </motion.div>

    </div>
    {/* desc & banner CTA */}
    
    {/* image */}
    <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport= {{once:false, amount:0.7 }} className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[482px] mx-auto'>
      <img src={Image} alt="profile" />
    </motion.div>
    
    </div>
    </div>
    </section>;
};

export default Banner;
