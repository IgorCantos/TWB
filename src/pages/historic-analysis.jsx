import { Helmet } from 'react-helmet-async';

import HistoricAnalysisView from 'src/sections/historic-analysis/view';

// ----------------------------------------------------------------------

export default function HistoricAnalysisPage() {
  return (
    <>
      <Helmet>
        <title> TWB </title>
      </Helmet>

      <HistoricAnalysisView />
    </>
  );
}
