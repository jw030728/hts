import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';

type ColumnType = {
  id: string;
  label: string;
};

type RowType = {
  [key: string]: string | number | PastTradePriceType;
};

type PastTradePriceType = {
  price: number;
  percent: number;
};

const columns: ColumnType[] = [
  { id: 'name', label: '종목명' },
  { id: 'currentPrice', label: '현재가' },
  {
    id: 'pastPrice',
    label: '전일대비',
  },
];

const rows: RowType[] = [
  {
    name: 'a',
    currentPrice: 1000,
    pastPrice: {
      price: 100,
      percent: 10,
    },
  },
  {
    name: 'b',
    currentPrice: 10000,
    pastPrice: {
      price: 1000,
      percent: 10,
    },
  },
  {
    name: 'c',
    currentPrice: 100000,
    pastPrice: {
      price: 10000,
      percent: 10,
    },
  },
  {
    name: 'd',
    currentPrice: 1000000,
    pastPrice: {
      price: 100000,
      percent: 10,
    },
  },
  {
    name: 'e',
    currentPrice: 10000000,
    pastPrice: {
      price: 1000000,
      percent: 10,
    },
  },
  {
    name: 'f',
    currentPrice: 100000000,
    pastPrice: {
      price: 10000000,
      percent: 10,
    },
  },
  {
    name: 'g',
    currentPrice: 1000000000,
    pastPrice: {
      price: 100000000,
      percent: 10,
    },
  },
];

const Search = () => {
  return (
    <Box>
      <Box>
        <TextField variant="outlined" margin="dense" placeholder="종목명" fullWidth />
      </Box>
      <Box>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row: RowType) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.toString()}>
                    {columns.map((column: ColumnType) => {
                      if (column.id === 'pastPrice') {
                        const pastPrice = row[column.id] as PastTradePriceType;
                        return <TableCell key={column.id}>{pastPrice.price}</TableCell>;
                      }
                      const value = row[column.id] as string | number;
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
