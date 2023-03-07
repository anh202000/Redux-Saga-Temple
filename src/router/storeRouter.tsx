import { createBrowserRouter } from 'react-router-dom';
import Home from '../src/page/Home';
import App from '../App';

export const storeRouter = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <App />,
  },
]);
