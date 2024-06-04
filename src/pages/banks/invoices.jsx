import { Helmet } from 'react-helmet-async';

import InvoicesView from 'src/sections/banks/invoices/view';

export default function InvoicesPage() {
  return (
    <>
      <Helmet>
        <title> Transações | TWB </title>
      </Helmet>

      <InvoicesView />
    </>
  );
}
