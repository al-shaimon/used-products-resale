import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/kKyNMnW/home-banner-20k-982x500.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="banner"
          />
          <div>
            <h1 className="text-5xl font-bold">Diamond Tech Resale!!</h1>
            <p className="py-6">
              Welcome to the Diamond Tech Resale. You can buy and sell your computer parts here. You
              can build your dream pc with reasonable price from us.
            </p>
            <Link to='/category'><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
