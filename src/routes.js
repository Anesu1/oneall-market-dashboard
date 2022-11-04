import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
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
        { element: <Navigate to="/dashboard/app" /> },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        {path: 'profile', element: <Account />},
        {path:'new-product', element:<NewProduct />}
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
      element:<Product />
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
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
