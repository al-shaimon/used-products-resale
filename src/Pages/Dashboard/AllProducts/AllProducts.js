import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AllProducts = () => {
  // const [adsProducts, setAdsProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://assignment-12-server-taupe.vercel.app/products`;
  const { data: productList = [] } = useQuery({
    queryKey: ['productList'],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // const handleAdsProduct = () => {
  //   setAdsProducts([...adsProducts, data]);
  // };
  return (
    <div>
      <h3 className="text-3xl mb-5">All Product List</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Ads</th>
            </tr>
          </thead>
          <tbody>
            {productList &&
              productList?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product?.sellerName}</td>
                  <td>{product?.model}</td>
                  <td>{product?.resalePrice}</td>
                  <td>
                    <span className="btn btn-accent">Promote</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div>
        <h2>{data.model}</h2>
        <img src={data.img} alt={data.model} />
        <p>{data.price}</p>
        <button className="btn btn-accent" onClick={handleAdsProduct}>
          Add to Cart
        </button>
      </div> */}
    </div>
  );
};

export default AllProducts;
