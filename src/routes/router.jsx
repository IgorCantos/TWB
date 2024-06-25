import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

const FinancialResumePage = lazy(() => import('src/pages/financial-resume'));
const FinancialGoals = lazy(() => import('src/pages/financial-goals'));
const ManageBanksPage = lazy(() => import('src/pages/banks/manage-banks'));
const TransactionsPage = lazy(() => import('src/pages/banks/transactions'));
const InvoicesPage = lazy(() => import('src/pages/banks/invoices'));
const HistoricAnalysisPage = lazy(() => import('src/pages/historic-analysis'));
const Page404 = lazy(() => import('src/pages/page-not-found'));

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
        { path: 'bancos/gerenciar', element: <ManageBanksPage /> },
        { path: 'bancos/transacoes', element: <TransactionsPage /> },
        { path: 'bancos/faturas', element: <InvoicesPage /> },
        { path: 'analises', element: <HistoricAnalysisPage /> },
        { path: 'metas', element: <FinancialGoals /> },
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
