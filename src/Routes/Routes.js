import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import AddProducts from '../Pages/Dashboard/AddProducts/AddProducts';
import BuyerDashboard from '../Pages/Dashboard/BuyerDashboard/BuyerDashboard';
import Payment from '../Pages/Dashboard/Payment/Payment';
import SellerDashboard from '../Pages/Dashboard/SellerDashboard/SellerDashboard';
import Error from '../Pages/Error/Error';
import Category from '../Pages/Home/Category';
import Home from '../Pages/Home/Home';
import MyBookedProduct from '../Pages/Home/MyBookedProduct/MyBookedProduct';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AdminRoute from './AdminRoute';
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
        loader: () => fetch('products.json'),
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
        path: '/dashboard/',
        element: <MyBookedProduct></MyBookedProduct>,
      },
      {
        path: '/dashboard/addProducts',
        element: (
          <AdminRoute>
            <AddProducts></AddProducts>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/allBuyers',
        element: (
          <AdminRoute>
            <BuyerDashboard></BuyerDashboard>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/allSellers',
        element: (
          <AdminRoute>
            <SellerDashboard></SellerDashboard>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-taupe.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);

export default router;
