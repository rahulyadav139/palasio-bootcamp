import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Enrol from './pages/Enrol';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/enrol',
    element: <Enrol />,
  },
]);
