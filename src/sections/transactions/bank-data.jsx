import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

export default function BankData({
  bankName,
  bankLogoUrl,
  totalInputs,
  totalOutputs
}) {
  return (
    <Card sx={{ margin: '0 10px' }}>
      <Box m={3}>
        <Stack direction="column" alignItems="center">
          <Avatar alt='Itaú' src={bankLogoUrl} sx={{ marginBottom: '10px' }} />
          {bankName}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', margin: '20px 0' }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between" textAlign="center">
          <Box mx={2}>
            <Typography>
              Entradas
            </Typography>
            <Typography variant='h5' fontWeight='bold'>
              {totalInputs}
            </Typography>
          </Box>

          <Box mx={2}>
            <Typography>
              Saídas
            </Typography>
            <Typography variant='h5' fontWeight='bold'>
              {totalOutputs}
            </Typography>
          </Box>


        </Stack>


      </Box>
    </Card >
  );
}

BankData.propTypes = {
  bankName: PropTypes.string,
  bankLogoUrl: PropTypes.string,
  totalInputs: PropTypes.string,
  totalOutputs: PropTypes.string,
};
