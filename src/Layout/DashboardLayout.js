import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-content text-white">
            <li>
              <Link to="/dashboard">My Dashboard</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/addProducts">Add New Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/allProducts">All Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/allBuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
