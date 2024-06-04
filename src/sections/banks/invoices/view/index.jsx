import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Scrollbar from 'src/components/scrollbar';

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
import InvoiceCard from '../components/bank-account-balance';

// ----------------------------------------------------------------------

export default function InvoicesView() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [filterBy, setFilterBy] = useState('');

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = banks.map((n) => n.id);
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

  const handleChangeDataTypeSelect = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" my={3}>
        <Typography variant="h4">Minhas faturas</Typography>
      </Stack>

      <Grid container spacing={3} my={2}>
        <Grid xs={12} sm={6} md={3}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Selecione o banco</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterBy}
              label="Selecione o banco"
              onChange={handleChangeDataTypeSelect}
            >
              <MenuItem value="Banco Santander">Banco Santander</MenuItem>
              <MenuItem value="Nubank">Nubank</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label="Selecione o mês" />
            </FormControl>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Grid container spacing={3} my={2}>
        {filterBy && (
          <>
            <Grid xs={12} sm={6} md={3}>
              {filterBy === 'Banco Santander' && (
                <img
                  src="https://cms.santander.com.br/sites/WPS/imagem/img-cartao-unlimited-sem-bandeira/22-05-30_165021_P_cartao_unlimited_sembandeira.png"
                  alt="Santander"
                />
              )}

              {filterBy === 'Nubank' && (
                <img
                  src="https://s2-techtudo.glbimg.com/251VTGpAhn_DnRdwLMWx6OGgPQU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/D/0/2eNl0kQFSRGlRT8GB6Ow/nu-card-large.png"
                  alt="Santander"
                />
              )}
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <InvoiceCard subtitle="Valor atual da fatura" title="R$ 300,00" />
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <InvoiceCard subtitle="Limite disponivel" title="R$ 100,00" />
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <InvoiceCard subtitle="Saldo em conta" title="R$ 1000,00" />
            </Grid>
          </>
        )}
      </Grid>

      <Stack direction="row" alignItems="center" justifyContent="space-between" my={3}>
        <Typography variant="h4">Transações dessa fatura</Typography>
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
                  { id: 'cardNumber', label: 'Final do cartão' },
                  { id: 'category', label: 'Categoria' },
                  { id: 'type', label: 'Tipo', align: 'left' },
                  { id: 'amount', label: 'Valor (R$)' },
                  { id: 'totalAccountAmount', label: 'Saldo total (R$)' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .filter((transaction) => transaction.bankName === filterBy)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TransactionsTableRow
                      key={row.id}
                      avatarUrl={row.customerFriendlyLogoUri}
                      bankName={row.bankName}
                      transactionDate={row.transactionDate}
                      cardNumber={row.cardNumber}
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
                  emptyRows={emptyRows(page, rowsPerPage, banks.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={banks.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[50, 100, 150]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
