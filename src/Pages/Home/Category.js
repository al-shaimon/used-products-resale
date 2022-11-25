import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/NavBar/NavBar';

const Category = () => {
  const categoryNews = useLoaderData();
  useTitle('Category');

  const news = useLoaderData();

  const { title, details, image_url, category_id } = news;

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

      {/* news */}

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">All News in this Category</button>
          </div>
        </div>
      </div>

      {/* <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All News in this Category</Button>
          </Link>
        </Card.Body>
      </Card> */}
      <Footer></Footer>
    </>
  );
};

export default Category;
