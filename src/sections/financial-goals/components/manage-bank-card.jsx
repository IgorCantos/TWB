import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { applyBrlMask } from 'src/utils/format-number';

export default function GoalCard() {
  return (
    <Card sx={{ margin: '0 10px', minWidth: '300px' }}>
      <CardHeader title="Comprar um notebook" />
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          textAlign="center"
          width="100%"
        >
          <Box>
            <Typography>Atual</Typography>
            <Typography>{applyBrlMask(2000)}</Typography>
          </Box>

          <Box>
            <Typography>Meta</Typography>
            <Typography>{applyBrlMask(2000)}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

GoalCard.propTypes = {};
