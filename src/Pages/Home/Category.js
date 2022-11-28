import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/NavBar/NavBar';
import BookingModal from './BookingModal/BookingModal';
import Products from './Products';

const Category = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [bookingProduct, setBookingProduct] = useState(null);

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://assignment-12-server-taupe.vercel.app/products').then((res) => res.json()),
  });

  useEffect(() => {
    fetch('category.json')
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="text-center">
        <div>
          <h2 className="text-xl font-bold">Featured Category</h2>
          <p className="font-semibold">Get Your Desired Product from Featured Category</p>
        </div>
        <div className="flex justify-center">
          {categoryProducts?.map((categoryProduct) => (
            <div key={categoryProduct._id} className="card w-48 bg-base-100 shadow-xl m-2 p-2">
              <Link to={`/category/${categoryProduct._id}`} className="card-body ">
                <img className="mx-auto w-1/2" src="https://i.ibb.co/KLpDJJJ/monitor.png" alt="" />
                <p className="font-semibold">{categoryProduct.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/*All Products */}

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
        ></BookingModal>
      )}
      <Footer></Footer>
    </>
  );
};

export default Category;
