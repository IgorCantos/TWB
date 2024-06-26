import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TransactionsTableRow({
  selected,
  avatarUrl,
  bankName,
  transactionDate,
  cardNumber,
  category,
  type,
  amount,
  totalAccountAmount,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar alt={bankName} src={avatarUrl} sx={{ width: 30, height: 30 }} />

            <Typography variant="subtitle2" noWrap>
              {bankName}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{transactionDate}</TableCell>
        <TableCell>{cardNumber}</TableCell>
        <TableCell>
          <Label>{category}</Label>
        </TableCell>

        <TableCell>
          <Label>{type}</Label>
        </TableCell>

        <TableCell>{amount}</TableCell>

        <TableCell>{totalAccountAmount}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Editar
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Deletar
        </MenuItem>
      </Popover>
    </>
  );
}

TransactionsTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  transactionDate: PropTypes.any,
  cardNumber: PropTypes.any,
  handleClick: PropTypes.func,
  type: PropTypes.any,
  bankName: PropTypes.any,
  category: PropTypes.any,
  selected: PropTypes.any,
  amount: PropTypes.string,
  totalAccountAmount: PropTypes.string,
};
