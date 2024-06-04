import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function InvoiceCard({ iconUrl, title, subtitle }) {
  return (
    <Card>
      <Box m={3}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Avatar alt="Itaú" src={iconUrl} sx={{ margin: '0 10px', width: 55, height: 55 }} />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="center" textAlign="center">
          <Box mx={2}>
            <Typography mt={2.5}>{subtitle}</Typography>
            <Typography fontWeight="bold">{title}</Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

InvoiceCard.propTypes = {
  iconUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
