import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/NavBar/NavBar';
import BookingModal from './BookingModal/BookingModal';
import Products from './Products';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [bookingProduct, setBookingProduct] = useState(null);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
          <div className="card w-48 bg-base-100 shadow-xl m-2 p-2">
            <Link to="/category/:id" className="card-body ">
              <img className="mx-auto w-1/2" src="https://i.ibb.co/KLpDJJJ/monitor.png" alt="" />
              <p className="font-semibold">Monitor</p>
            </Link>
          </div>
          <div className="card w-48 bg-base-100 shadow-xl m-2 p-2">
            <Link to="/category/:id" className="card-body ">
              <img className="mx-auto w-1/2" src="https://i.ibb.co/hfYf4RG/cpu.png" alt="" />
              <p className="font-semibold">Processor</p>
            </Link>
          </div>
          <div className="card w-48 bg-base-100 shadow-xl m-2 p-2">
            <Link to="/category/:id" className="card-body ">
              <img className="mx-auto w-1/2" src="https://i.ibb.co/FJShM1Z/gpu.png" alt="" />
              <p className="font-semibold">Graphics Card</p>
            </Link>
          </div>
        </div>
      </div>

      {/*All Products */}

      <div className="mx-6 my-6 gap-6 grid grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
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
