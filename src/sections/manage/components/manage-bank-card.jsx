import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

export default function ManageBankCard({ bankName, bankLogoUrl }) {
  return (
    <Card sx={{ margin: '0 10px', minWidth: '300px' }}>
      <Box m={3}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Avatar alt="Itaú" src={bankLogoUrl} sx={{ margin: '0 10px', width: 55, height: 55 }} />
          {bankName}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="center" my={3}>
          <Button
            href="/"
            size="large"
            variant="outlined"
            component={RouterLink}
            sx={{ margin: '0 10px' }}
          >
            Deletar
          </Button>

          <Button
            href="/"
            size="large"
            variant="contained"
            component={RouterLink}
            sx={{ margin: '0 10px' }}
          >
            Atualizar
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}

ManageBankCard.propTypes = {
  bankName: PropTypes.string,
  bankLogoUrl: PropTypes.string,
};
