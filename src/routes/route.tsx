import App from '@/App';
import DashboardPage from '@/pages/DashboardPage';
import HomePage from '@/pages/HomePage';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'dashboard',
        Component: DashboardPage,
      },
    ],
  },
]);

export default router;
