import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material'

export const DataTable = ({matchResult}) => {
      const rows = [
        matchResult.batFirst,
        matchResult.fieldFirst
      ];
  return (
    <div>
        <Typography variant='h5' mt={3}>
            {matchResult.date} {matchResult.opponent}戦
        </Typography>
        <TableContainer component={Paper} style={{backgroundColor: '#025230'}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right" style={{color: 'white'}}>1</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>2</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>3</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>4</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>5</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>6</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>7</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>合計</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>バッテリー</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.team}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" style={{color: 'white'}}>
                        {row.team}
                    </TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.first}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.second}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.third}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.fourth}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.fifth}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.sixth}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.seventh}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.total}</TableCell>
                    <TableCell align="right" style={{color: 'white'}}>{row.batteries}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Typography variant='h6' mt={4}>
                {matchResult.comment}
        </Typography>
    </div>
  )
}
