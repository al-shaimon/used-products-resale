import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-xl font-bold">Featured Category</h2>
        <p className="font-semibold">Get Your Desired Product from Featured Category</p>
      </div>

      {/* Categories */}
      <div className="flex justify-center">
        <div className="card w-48 bg-base-100 shadow-xl m-2 p-2">
          <Link to="/category" className="card-body ">
            <img className="mx-auto w-1/2" src="https://i.ibb.co/KLpDJJJ/monitor.png" alt="" />
            <p className="font-semibold">Monitor</p>
          </Link>
        </div>
        <div className="card w-48 bg-base-100 shadow-xl m-2 p-2">
          <Link to="/category" className="card-body ">
            <img className="mx-auto w-1/2" src="https://i.ibb.co/hfYf4RG/cpu.png" alt="" />
            <p className="font-semibold">Processor</p>
          </Link>
        </div>
        <div className="card w-48 bg-base-100 shadow-xl m-2 p-2">
          <Link to="/category" className="card-body ">
            <img className="mx-auto w-1/2" src="https://i.ibb.co/FJShM1Z/gpu.png" alt="" />
            <p className="font-semibold">Graphics Card</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
