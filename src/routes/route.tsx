import { createBrowserRouter } from 'react-router';

import { HomePage } from '@/features/home';
import { DashboardPage } from '@/features/dashboard';
import { LoginPage } from '@/features/auth';
import { NotFoundPage } from '@/features/notFound';

import { AppLayout } from '@/components/layout/AppLayout';
import { AuthLayout } from '@/components/layout/AuthLayout';

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
