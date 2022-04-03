import { lazy } from 'react';

const appRoutes = [
  {
    path: '/',
    element: lazy(() => import('./pages/Home')),
  },
  {
    path: '/mylist',
    element: lazy(() => import('./pages/MyList')),
  },
  {
    path: '/search',
    element: lazy(() => import('./pages/Search')),
  },
  {
    path: '/video/:id',
    element: lazy(() => import('./components/Video')),
  },
];

export default appRoutes;