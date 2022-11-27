import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoriesProduct from './CategoriesProduct';

const Categories = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  const singleProducts = useLoaderData();

  useEffect(() => {
    fetch('category.json')
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data));
  }, []);

  return (
    <>
      <div className="text-center">
        <div>
          <h2 className="text-xl font-bold">Featured Category</h2>
          <p className="font-semibold">Get Your Desired Product from Featured Category</p>
        </div>

        {/* Categories */}
        <div className="flex justify-center">
          {categoryProducts.map((categoryProduct) => (
            <div key={categoryProduct._id} className="card w-48 bg-base-100 shadow-xl m-2 p-2">
              <Link to={`/category`} className="card-body ">
                <img className="mx-auto w-1/2" src="https://i.ibb.co/KLpDJJJ/monitor.png" alt="" />
                <p className="font-semibold">{categoryProduct.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6 my-6 gap-6 grid grid-cols-1 md:grid-cols-3">
        {singleProducts?.map((parts) => (
          <CategoriesProduct key={parts._id} parts={parts}></CategoriesProduct>
        ))}
      </div>
    </>
  );
};

export default Categories;
