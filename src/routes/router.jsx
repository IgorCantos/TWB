import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const FinancialResumePage = lazy(() => import('src/pages/financial-resume'));
export const TransactionsPage = lazy(() => import('src/pages/transactions'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <FinancialResumePage />, index: true },
        { path: 'transacoes', element: <TransactionsPage /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
