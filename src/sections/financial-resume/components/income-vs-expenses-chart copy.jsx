import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { applyBrlMask } from 'src/utils/format-number';

export default function TopSpendingDays() {
  return (
    <Card sx={{ px: 3, pt: 3, pb: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <CardHeader
          title="Top 3 dias que mais gastei no período"
          sx={{ margin: '0px', padding: '0px' }}
        />
      </Box>

      <Box>
        <Card
          variant="outlined"
          sx={{
            minHeight: 235,
            p: 1.5,
            my: 3,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {[
            {
              day: 2,
              total: 250,
            },
            {
              day: 8,
              total: 280,
            },

            {
              day: 17,
              total: 321,
            },
          ].map((data) => (
            <Box textAlign="center">
              <Typography
                variant="body2"
                sx={{
                  color: 'text.disabled',
                }}
              >
                Dia {data.day}
              </Typography>
              <Typography variant="h6"> {applyBrlMask(data.total)}</Typography>
            </Box>
          ))}
        </Card>

        <Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={2}>
          <Button variant="text">Ver todas</Button>
        </Box>
      </Box>
    </Card>
  );
}
