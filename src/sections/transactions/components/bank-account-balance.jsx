import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

export default function BankAccountBalance({ bankName, bankLogoUrl, totalInputs, totalOutputs }) {
  return (
    <Card sx={{ margin: '0 10px' }}>
      <Box m={3}>
        <Stack direction="column" alignItems="center">
          <Avatar
            alt="Itaú"
            src={bankLogoUrl}
            sx={{ marginBottom: '10px', width: 55, height: 55 }}
          />
          {bankName}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', margin: '20px 0' }} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
        >
          <Box mx={2}>
            <Typography>Entradas</Typography>
            <Typography>{totalInputs}</Typography>
          </Box>

          <Box mx={2}>
            <Typography>Saídas</Typography>
            <Typography>{totalOutputs}</Typography>
          </Box>

          <Box mx={2}>
            <Typography>Saldo</Typography>
            <Typography>R$ 500,00</Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

BankAccountBalance.propTypes = {
  bankName: PropTypes.string,
  bankLogoUrl: PropTypes.string,
  totalInputs: PropTypes.string,
  totalOutputs: PropTypes.string,
};
