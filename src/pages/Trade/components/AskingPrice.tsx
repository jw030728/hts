import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

type DataSetType = {
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  bordWidth: number;
};

type DataType = {
  labels: string[];
  datasets: DataSetType[];
};

type RowType = {
  price: number;
  percent: number;
  dataSet: DataType;
};

const increaseAskingPrice: RowType[] = [
  {
    price: 192400,
    percent: 4,
  },
  {
    price: 190550,
    percent: 3,
  },
  {
    price: 188700,
    percent: 2,
  },
  {
    price: 185850,
    percent: 0,
  },
];
const decreaseAskingPrices: RowType[] = [
  {
    price: 183150,
    percent: -1,
  },
  {
    price: 181300,
    percent: -2,
  },
  {
    price: 179450,
    percent: -3,
  },
  {
    price: 177600,
    percent: -4,
  },
  {
    price: 175750,
    percent: -5,
  },
];

const AskingPrices = () => {
  return (
    <Box>
      <Bar type="" data={data} options={options} />
      <TableContainer>
        <TableHead></TableHead>
        <TableBody>
          {increaseAskingPrice.map((row: RowType) => {
            return (
              <TableRow key={row.price}>
                <TableCell></TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.percent}%</TableCell>
                <TableCell></TableCell>
              </TableRow>
            );
          })}
          {decreaseAskingPrices.map((row: RowType) => {
            return (
              <TableRow key={row.price}>
                <TableCell></TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.percent}%</TableCell>
                <TableCell></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </Box>
  );
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'purple', 'Orange'],
  datasets: [
    {
      label: '# of Vores',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba (255, 99, 132, 0.2)',
        'rgba (54, 162, 235, 0.2)',
        'rgba (255, 206, 86, 0.2)',
        'rgba (75, 192, 192, 0.2)',
        'rgba (153, 102, 255, 0.2)',
        'rgba (255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba (255, 99, 132, 1)',
        'rgba (54, 162, 235, 1)',
        'rgba (255, 206, 86, 1)',
        'rgba (75, 192, 192, 1)',
        'rgba (153, 102, 255, 1)',
        'rgba (255, 159, 64, 1)',
      ],
      bordeWidth: 1,
    },
  ],
};
const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};
const AskingPrice = () => {
  return (
    <Box>
      <Bar type="" data={data} options={options} />
    </Box>
  );
};

export default AskingPrice;
