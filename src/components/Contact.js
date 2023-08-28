import React ,{useRef} from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0azap89', 'template_ht1br1i', form.current, '4ibscZtawprTb4wqJ')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
          e.target.reset();
        }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}}  className='flex-1'>
            <div>
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Get in touch

            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
            Lets work <br />together!
            </h2>

            </div>
            
          </motion.div>
          {/* form */}
          <motion.form variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} ref={form} onSubmit={sendEmail} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='name' placeholder='Your Name' name='user_name' />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
           type='email' placeholder='Your Email' name='user_email'/>
          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          type='text' placeholder='Your Message' name='message'></textarea>
          <button className='btn btn-lg' type='submit' value='Send'>Send Message</button>
          </motion.form>
        </div>
      </div>

    </section>

  )
   
};

export default Contact;
