import React from 'react';

const Products = ({ product }) => {
  console.log(product);
  const { sellerName, model, img, price, resalePrice, location, yearsOfUse, postTime } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="product_img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{model}</h2>
          <h2>
            For Sale by: <strong>{sellerName}</strong>
          </h2>
          <h2>Location: {location}</h2>
          <p>Posted on {postTime}</p>
          <h3 className="text-lg">Original Price: <strong className='text-red-400'>{price}</strong></h3>
          <h3 className="text-lg">Resale Price: <strong className='text-green-600'>{resalePrice}</strong></h3>
          <h3 className="text-lg">Years of usage: {yearsOfUse}</h3>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
