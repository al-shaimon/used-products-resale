import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['model'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();
      return data;
    },
  });

  const handleAddNewProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=e3174c028655e500c314f6fed3edc84a`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            email: data.email,
            model: data.model,
            image: imgData.data.url,
          };

          fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/');
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A New Product</h2>
      <form onSubmit={handleSubmit(handleAddNewProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register('model', {
              required: 'Product Name is Required',
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.model && <p className="text-red-500">{errors.model.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register('price', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Year of purchase</span>
          </label>
          <input
            type="text"
            {...register('usage', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.usage && <p className="text-red-500">{errors.usage.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Product Condition</span>
          </label>
          <select {...register('condition')} className="select input-bordered w-full max-w-xs">
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register('description', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Product Category</span>
          </label>
          <select {...register('category')} className="select input-bordered w-full max-w-xs">
            <option value="monitor">Monitor</option>
            <option value="processor]">Processor</option>
            <option value="gpu">Graphics Card</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            {...register('phone', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register('location', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register('image', {
              required: 'Photo is Required',
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input className="btn btn-accent w-full mt-4" value="Add Doctor" type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
