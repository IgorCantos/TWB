import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import FormControl from '@mui/material/FormControl';

import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { texts } from 'src/sections/financial-resume/view';

import { applyBrlMask } from 'src/utils/format-number';
import { banks } from 'src/_mock/banks';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableNoData from '../table-no-data';
import TransactionsTableRow from '../components/transactions-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import BankAccountBalance from '../components/bank-account-balance';

// ----------------------------------------------------------------------

export default function TransactionsView() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: banks,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  // TODO: Comes from backend
  const totalSantander = applyBrlMask(
    dataFiltered
      .filter((data) => data.bankName === 'Santander')
      .reduce((a, b) => a + Number(b.totalAccountAmount), 0)
  );
  const totalItau = applyBrlMask(
    dataFiltered
      .filter((data) => data.bankName === 'Itaú')
      .reduce((a, b) => a + Number(b.totalAccountAmount), 0)
  );

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" my={3}>
        <Typography variant="h4">Minhas transações</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Cadastrar transação
        </Button>
      </Stack>

      <Grid container spacing={3} my={2}>
        <Grid xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label={texts.selects.startFrom} />
            </FormControl>
          </LocalizationProvider>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label={texts.selects.endIn} />
            </FormControl>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" mb={5}>
        <BankAccountBalance
          bankName={banks[0].bankName}
          bankLogoUrl={banks[0].customerFriendlyLogoUri}
          totalInputs={totalSantander}
          totalOutputs={totalSantander}
        />
        <BankAccountBalance
          bankName={banks[1].bankName}
          bankLogoUrl={banks[1].customerFriendlyLogoUri}
          totalInputs={totalItau}
          totalOutputs={totalItau}
        />
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={banks.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'bankName', label: 'Banco' },
                  { id: 'transactionDate', label: 'Data da transação' },
                  { id: 'category', label: 'Categoria' },
                  { id: 'type', label: 'Tipo', align: 'left' },
                  { id: 'amount', label: 'Valor (R$)' },
                  { id: 'totalAccountAmount', label: 'Saldo total (R$)' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TransactionsTableRow
                      key={row.id}
                      avatarUrl={row.customerFriendlyLogoUri}
                      bankName={row.bankName}
                      transactionDate={row.transactionDate}
                      category={row.category}
                      type={row.type}
                      amount={row.amount}
                      totalAccountAmount={row.totalAccountAmount}
                      handleClick={(event) => handleClick(event, row.id)}
                      selected={selected.indexOf(row.id) !== -1}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[50, 100, 150]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
