import { Helmet } from 'react-helmet-async';
import FinancialGoalsView from 'src/sections/financial-goals/view';

export default function FinancialGoals() {
  return (
    <>
      <Helmet>
        <title> Metas financeiras | TWB </title>
      </Helmet>

      <FinancialGoalsView />
    </>
  );
}
