import App from '@/App';
import { HomePage } from '@/features/home';
import { DashboardPage } from '@/features/dashboard';
import { createBrowserRouter } from 'react-router';
import { NotFoundPage } from '@/features/notFound';

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
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
