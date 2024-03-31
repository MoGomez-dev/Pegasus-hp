import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import styled from "styled-components"
import { db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 

export const AdminAddResult = () => {
  const [data, setData] = useState({
    date: '',
    opponent: '',
    batFirstTeam: '',
    batFirstFirst: '',
    batFirstSecond: '',
    batFirstThird: '',
    batFirstFourth: '',
    batFirstFifth: '',
    batFirstSixth: '',
    batFirstSeventh: '',
    batFirstTotal: '',
    batFirstBatteries: '',
    fieldFirstTeam: '',
    fieldFirstFirst: '',
    fieldFirstSecond: '',
    fieldFirstThird: '',
    fieldFirstFourth: '',
    fieldFirstFifth: '',
    fieldFirstSixth: '',
    fieldFirstSeventh: '',
    fieldFirstTotal: '',
    fieldFirstBatteries: '',
    comment: ''}
  )

  const updateData = (e, key) => {
    setData((prevData) => ({...prevData, [key]:e.target.value}))
  }

  const addResult = async () => {
    if(data.date == ''){
      alert('日付が入力されていません');
      return;
    }
    if(data.opponent == ''){
      alert('対戦相手が入力されていません');
      return;
    }
    const title = data.date.replace(/-/g,'');
    await setDoc(doc(db,"scorebook", title),{
        id:title,
        date: data.date,
        opponent: data.opponent,
        batFirst: {
          team: data.batFirstTeam,
          first: data.batFirstFirst,
          second: data.batFirstSecond,
          third: data.batFirstThird,
          fourth: data.batFirstFourth,
          fifth: data.batFirstFifth,
          sixth: data.batFirstSixth,
          seventh: data.batFirstSeventh,
          total: data.batFirstTotal,
          batteries: data.batFirstBatteries,
        },
        fieldFirst: {
          team: data.fieldFirstTeam,
          first: data.fieldFirstFirst,
          second: data.fieldFirstSecond,
          third: data.fieldFirstThird,
          fourth: data.fieldFirstFourth,
          fifth: data.fieldFirstFifth,
          sixth: data.fieldFirstSixth,
          seventh: data.fieldFirstSeventh,
          total: data.fieldFirstTotal,
          batteries: data.fieldFirstBatteries,
        },
        comment: data.comment,
    });
    setData({
      date: '',
      opponent: '',
      batFirstTeam: '',
      batFirstFirst: '',
      batFirstSecond: '',
      batFirstThird: '',
      batFirstFourth: '',
      batFirstFifth: '',
      batFirstSixth: '',
      batFirstSeventh: '',
      batFirstTotal: '',
      batFirstBatteries: '',
      fieldFirstTeam: '',
      fieldFirstFirst: '',
      fieldFirstSecond: '',
      fieldFirstThird: '',
      fieldFirstFourth: '',
      fieldFirstFifth: '',
      fieldFirstSixth: '',
      fieldFirstSeventh: '',
      fieldFirstTotal: '',
      fieldFirstBatteries: '',
      comment: ''})
      alert('completed');
  }

  return (
    <div>
      <Typography variant='h6' >
        日付
      </Typography>
      <input type="date" min="2018-01-01" max="2050-12-31" value={data.date} onChange={(e) => updateData(e,"date")}/>
      <br />
      <br />
      <TextField
          required
          id="outlined-required"
          label="対戦相手"
          value={data.opponent}
          onChange={(e) => updateData(e,"opponent")}
      />
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="right">6</TableCell>
              <TableCell align="right">7</TableCell>
              <TableCell align="right">合計</TableCell>
              <TableCell align="right">バッテリー</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <input type="text" value={data.batFirstTeam} onChange={(e) => updateData(e,"batFirstTeam")}/>
                </TableCell>
                <TableCell align="right">
                  <NumberArea  type="number" min="0" value={data.batFirstFirst} onChange={(e) => updateData(e,"batFirstFirst")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstSecond} onChange={(e) => updateData(e,"batFirstSecond")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstThird} onChange={(e) => updateData(e,"batFirstThird")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstFourth} onChange={(e) => updateData(e,"batFirstFourth")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstFifth} onChange={(e) => updateData(e,"batFirstFifth")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstSixth} onChange={(e) => updateData(e,"batFirstSixth")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstSeventh} onChange={(e) => updateData(e,"batFirstSeventh")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.batFirstTotal} onChange={(e) => updateData(e,"batFirstTotal")} />
                </TableCell>
                <TableCell align="right">
                  <TextField id="outlined-basic" label="バッテリー" variant="outlined" fullWidth value={data.batFirstBatteries} onChange={(e) => updateData(e,"batFirstBatteries")}/>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <input type="text" value={data.fieldFirstTeam} onChange={(e) => updateData(e,"fieldFirstTeam")}/>
                </TableCell>
                <TableCell align="right">
                  <NumberArea  type="number" min="0" value={data.fieldFirstFirst} onChange={(e) => updateData(e,"fieldFirstFirst")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstSecond} onChange={(e) => updateData(e,"fieldFirstSecond")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstThird} onChange={(e) => updateData(e,"fieldFirstThird")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstFourth} onChange={(e) => updateData(e,"fieldFirstFourth")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstFifth} onChange={(e) => updateData(e,"fieldFirstFifth")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstSixth} onChange={(e) => updateData(e,"fieldFirstSixth")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstSeventh} onChange={(e) => updateData(e,"fieldFirstSeventh")} />
                </TableCell>
                <TableCell align="right">
                <NumberArea  type="number" min="0" value={data.fieldFirstTotal} onChange={(e) => updateData(e,"fieldFirstTotal")} />
                </TableCell>
                <TableCell align="right">
                  <TextField id="outlined-basic" label="バッテリー" variant="outlined" fullWidth value={data.fieldFirstBatteries} onChange={(e) => updateData(e,"fieldFirstBatteries")} />
                </TableCell>
              </TableRow>
              </TableBody>
          </Table>
      </TableContainer>
      <TextField
        id="filled-multiline-static"
        label="試合コメント"
        fullWidth
        multiline
        rows={4}
        value={data.comment}
        variant="filled"
        onChange={(e) => updateData(e,"comment")}
      />
      <button variant="outlined" onClick={addResult}>追加</button>
    </div>
  )
}


const NumberArea = styled.input`
  width: 40px;
`