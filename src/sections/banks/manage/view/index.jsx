import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { banks } from 'src/_mock/banks';
import ManageBankCard from '../components/manage-bank-card';

// ----------------------------------------------------------------------

export default function ManageBanksView() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" my={3}>
        <Typography variant="h4">Meus bancos</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Cadastrar banco
        </Button>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" mb={5}>
        <ManageBankCard
          bankName={banks[0].bankName}
          bankLogoUrl={banks[0].customerFriendlyLogoUri}
        />
        <ManageBankCard
          bankName={banks[1].bankName}
          bankLogoUrl={banks[1].customerFriendlyLogoUri}
        />
      </Stack>
    </Container>
  );
}
