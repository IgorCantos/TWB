import PropTypes from 'prop-types';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Label from 'src/components/label';

export default function DenseTable({ headLabel, rows }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
            Minhas últimas transações
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {headLabel.map((headCell) => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar
                        alt={row.bankName}
                        src={row.customerFriendlyLogoUri}
                        sx={{ width: 30, height: 30 }}
                      />

                      <Typography variant="subtitle2" noWrap>
                        {row.bankName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell> {row.transactionDate} </TableCell>
                  <TableCell> {row.cardNumber} </TableCell>

                  <TableCell>
                    <Label>{row.category}</Label>
                  </TableCell>
                  <TableCell>
                    {' '}
                    <Label>{row.type}</Label>{' '}
                  </TableCell>
                  <TableCell> {row.amount} </TableCell>
                  <TableCell> {row.totalAccountAmount} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

DenseTable.propTypes = {
  headLabel: PropTypes.array,
  rows: PropTypes.array,
};
