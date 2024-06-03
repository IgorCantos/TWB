import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const FinancialResumePage = lazy(() => import('src/pages/financial-resume'));
export const TransactionsPage = lazy(() => import('src/pages/banks/transactions'));
export const ManageBanksPage = lazy(() => import('src/pages/banks/manage-banks'));
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
        { path: 'bancos/transacoes', element: <TransactionsPage /> },
        { path: 'bancos/gerenciar', element: <ManageBanksPage /> },
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
