import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BuyPremiumAction() {
  return (
    <Box display="flex" alignItems="center" minHeight="280px">
      <Box p={4} maxWidth="70%">
        <Typography variant="h5" fontWeight="bold" p={0}>
          Igor, descubra a melhor versão da sua gestão financeira.
        </Typography>

        <Typography variant="body2" mt={1} mb={3}>
          Com o Plano Premium, visualize seus gastos claramente, atinja suas metas e mantenha-se
          informado. Desfrute de suporte prioritário e uma experiência sem anúncios. Revolucione
          suas finanças hoje mesmo.
        </Typography>

        <Button
          // href="/"
          variant="contained"
          color="primary"
        >
          Comprar Premium
        </Button>
      </Box>

      <Box
        component="img"
        src="/assets/illustrations/premium.svg"
        sx={{
          mx: 'auto',
          p: '10px',
          height: 240,
        }}
      />
    </Box>
  );
}
