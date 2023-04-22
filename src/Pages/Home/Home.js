import React from 'react';
// import AboutUs from './AboutUs';
import Ads from './Ads';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <Ads></Ads>
      <Categories></Categories>
      {/* <AboutUs></AboutUs> */}
    </div>
  );
};

export default Home;