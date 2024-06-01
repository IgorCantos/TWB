import { Helmet } from 'react-helmet-async';

import FinancialResumeView from 'src/sections/financial-resume/view';

// ----------------------------------------------------------------------

export default function FinancialResumePage() {
  return (
    <>
      <Helmet>
        <title> TWB </title>
      </Helmet>

      <FinancialResumeView />
    </>
  );
}
