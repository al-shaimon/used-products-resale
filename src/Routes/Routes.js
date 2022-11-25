import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import AdminDashboard from '../Pages/Dashboard/AdminDashboard/AdminDashboard';
import BuyerDashboard from '../Pages/Dashboard/BuyerDashboard/BuyerDashboard';
import SellerDashboard from '../Pages/Dashboard/SellerDashboard/SellerDashboard';
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
        path: '/contact',
        element: <ContactUs></ContactUs>,
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
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/dashboard/admin',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/dashboard/buyer',
        element: <BuyerDashboard></BuyerDashboard>,
      },
      {
        path: '/dashboard/seller',
        element: <SellerDashboard></SellerDashboard>,
      },
    ],
  },
]);

export default router;
