import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import BookingModal from './BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [bookingProduct, setBookingProduct] = useState(null);

  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();
      return data;
    },
  });

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

        {/* All Products */}
        <div className="mx-6 my-6 gap-6 grid grid-cols-1 md:grid-cols-3">
          {products?.map((product) => (
            <Products
              key={product._id}
              product={product}
              setBookingProduct={setBookingProduct}
            ></Products>
          ))}
        </div>
        {bookingProduct && (
          <BookingModal
            bookingProduct={bookingProduct}
            setBookingProduct={setBookingProduct}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </>
  );
};

export default Categories;
