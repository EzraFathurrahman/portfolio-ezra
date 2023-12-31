import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/Porto PSN.png';
import Img2 from '../assets/Porto Cloudy.png';
import Img3 from '../assets/Porto Capture.png';

const Work  = () => {
  return <section id='work' className='section'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        {/* Grids */}
        <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
          {/* text */}
          <div>
          <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
          <p className='max-w-sm mb-6'>
            Hi! Checkout my work here, i've experienced in building some projects using various stack like Next JS, Express JS, and Laravel. Using React JS, Tailwind CSS, and Vanilla CSS as the frontend, and Node JS with SQL as the backend and database.
          </p>
          <button className='btn btn-sm hover:cursor-default'>Peek one of my projects below</button>
          </div>

          {/* Web 1 */}

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
            {/* Overlay */}
            <a href="https://pestasains.ipb.ac.id/" >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'>

            </div>
            {/* img */}
            
            <img className='group-hover:scale-125 transition-all duration-500'  src={Img1} alt="portfolio" />
            </a>
            
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
             <span className='text-gradient'> Pesta Sains Nasional</span>
            </div>
            
            
          </div>
        </motion.div>

        <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className="flex-1 flex flex-col sm:gap-y-10 lg:gap-y-[5.5rem] 
        xl:gap-y-18">
          {/* Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-72'>

            {/* Web 2 */}
            {/* Overlay */}
            <a href="https://cloudy-ez.netlify.app/">
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'>

            </div>

            
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500'  src={Img2} alt="portfolio" />
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
             <span className='text-gradient'> Cloudy Cloud service Web</span>
            </div>
            </a>
            
            
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

            {/* Web 2 */}
            {/* Overlay */}
            <a href="https://next-capture-app.vercel.app/">
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'>

            </div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500'  src={Img3} alt="portfolio" />
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
             <span className='text-gradient'> Capture Photography Web</span>
            </div>
            </a>
            
          </div>
        </motion.div>
      </div>
    </div>
</section>;
};

export default Work;
