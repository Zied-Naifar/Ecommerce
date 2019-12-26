/* eslint-disable import/no-cycle */
import ProductsTable from 'pages/ProductsTable/Loadable';
import LOGIN from 'pages/Login/Loadable';
import REGISTER from 'pages/Register/Loadable';

export default {
  ProductsTable: {
    path: '/Products-table',
    component: ProductsTable,
  },
  LOGIN: {
    path: '/login',
    component: LOGIN,
  },
  REGISTER: {
    path: '/register',
    component: REGISTER,
  },
};
