import { Helmet } from 'react-helmet-async';
import ManageBanksView from 'src/sections/banks/manage/view';

export default function ManageBanksPage() {
  return (
    <>
      <Helmet>
        <title> Transações | TWB </title>
      </Helmet>

      <ManageBanksView />
    </>
  );
}
