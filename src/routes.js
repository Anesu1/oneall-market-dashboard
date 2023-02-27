import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import { ProtectedRoute } from "./protectedRoute";

import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Product from './pages/Product';
import Account from './pages/Account';
import NewProduct from './components/NewProduct';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import {Store} from './pages/Store';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path:'/',
      element:<Home />,
      index:true
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { element: <ProtectedRoute><Navigate to="/dashboard/app" /></ProtectedRoute> },
        { path: 'app', element: <ProtectedRoute><DashboardAppPage /> </ProtectedRoute>},
        { path: 'user', element: <ProtectedRoute><UserPage /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><ProductsPage /></ProtectedRoute> },
        { path: 'blog', element: <BlogPage /> },
        {path: 'profile', element:  <ProtectedRoute><Account /></ProtectedRoute> },
        {path:'new-product', element:<ProtectedRoute> <NewProduct /></ProtectedRoute>},
         {path:'store', element:<ProtectedRoute> <Store /></ProtectedRoute>}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path:'register',
      element:<SignUp />,
    },

    {
      path:'product',
      element:<ProtectedRoute><Product /></ProtectedRoute>
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <ProtectedRoute> <Navigate to="/dashboard/app" />  </ProtectedRoute> , index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
