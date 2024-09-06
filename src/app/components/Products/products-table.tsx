import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductsTable() {
  return (
    <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm', transition: 'all ease-in-out 320ms', }}>
      <Table
        stripe="odd"
        hoverRow
        sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' }, transition: 'all ease-in-out 320ms', }}
      >
        <caption>Nutrition of your favorite menus.</caption>
        <thead style={{ transition: 'all ease-in-out 320ms', }}>
          <tr style={{ transition: 'all ease-in-out 320ms', }}>
            <th style={{ width: '40%', transition: 'all ease-in-out 320ms', }}>Column width (40%)</th>
            <th style={{ transition: 'all ease-in-out 320ms', }}>Calories</th>
            <th style={{ transition: 'all ease-in-out 320ms', }}>Fat&nbsp;(g)</th>
            <th style={{ transition: 'all ease-in-out 320ms', }}>Carbs&nbsp;(g)</th>
            <th style={{ transition: 'all ease-in-out 320ms', }}>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody style={{ transition: 'all ease-in-out 320ms', }}>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
