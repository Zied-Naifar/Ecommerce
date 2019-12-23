/* eslint-disable import/no-cycle */
import ProductsTable from 'pages/ProductsTable/Loadable';
import LOGIN from 'pages/Login/Loadable';

export default {
  ProductsTable: {
    path: '/Products-table',
    component: ProductsTable,
  },
  LOGIN: {
    path: '/login',
    component: LOGIN,
  },
};
