import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Enroll from './pages/Enroll';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/enroll',
    element: <Enroll />,
  },
]);
