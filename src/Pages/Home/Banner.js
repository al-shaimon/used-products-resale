import React from 'react';

const Banner = () => {
  return (
    <div>
      {/* <div
        className="hero min-h-[400px]"
        style={{ backgroundImage: `url("https://i.ibb.co/kKyNMnW/home-banner-20k-982x500.webp")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to the Computer Resale world. You can buy and sell your computer parts here.
              You can build your dream pc with reasonable price.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
