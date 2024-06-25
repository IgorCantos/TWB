import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Iconify from 'src/components/iconify';
import GoalCard from '../components/manage-bank-card';

export default function FinancialGoalsView() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" my={3}>
        <Typography variant="h4">Minhas metas financeiras</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Criar meta
        </Button>
      </Stack>

      <Grid container>
        <Grid sx={12} md={6}>
          <GoalCard />
        </Grid>
      </Grid>
    </Container>
  );
}
