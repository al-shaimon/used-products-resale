import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Error from '../Pages/Error/Error';
import Category from '../Pages/Home/Category';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: '/category/',
    element: (
      <PrivateRoute>
        <Category></Category>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-chi-lilac.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
