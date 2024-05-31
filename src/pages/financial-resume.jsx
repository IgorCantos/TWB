import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function FinancialResumePage() {
  return (
    <>
      <Helmet>
        <title> TWB </title>
      </Helmet>

      <AppView />
    </>
  );
}
