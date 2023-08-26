import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';

import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner className='mb-6'/>
      <Nav />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    <div ></div>
    </div>
  );
};

export default App;
