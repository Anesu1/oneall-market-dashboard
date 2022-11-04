// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}`} sx={{ width: 1, height: 1 }} />;

// const navConfig = [
//   {
//     title: 'dashboard',
//     path: '/dashboard/app',
//     icon: icon('ic_analytics'),
//   },
//   {
//     title: 'user',
//     path: '/dashboard/user',
//     icon: icon('ic_user'),
//   },
//   {
//     title: 'product',
//     path: '/dashboard/products',
//     icon: icon('ic_cart'),
//   },
//   {
//     title: 'blog',
//     path: '/dashboard/blog',
//     icon: icon('ic_blog'),
//   },
//   {
//     title: 'login',
//     path: '/login',
//     icon: icon('ic_lock'),
//   },
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: icon('ic_disabled'),
//   },
// ];

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics.svg'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart.svg'),
  },
  {
    title: 'terms of use',
    path: '/dashboard/terms_of_use',
    icon: icon('terms-of-use.png'),
  },
  {
    title: 'privacy policy',
    path: '/dashboard/privacy_policy',
    icon: icon('insurance.png'),
  },
];

export default navConfig;
