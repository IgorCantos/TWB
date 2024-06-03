import { Helmet } from 'react-helmet-async';

import TransactionsView from 'src/sections/banks/transactions/view';

export default function TransactionsPage() {
  return (
    <>
      <Helmet>
        <title> Transações | TWB </title>
      </Helmet>

      <TransactionsView />
    </>
  );
}
