import App from '@/App';
import { HomePage } from '@/features/home';
import { DashboardPage } from '@/features/dashboard';
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
