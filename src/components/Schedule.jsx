import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import { db } from '../firebase'
import styled from 'styled-components'

export const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
      const getSchedule = async () => {
        const now = new Date();
        now.setDate(1);
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        const data = await getDocs(query(collection(db, "schedule"), orderBy("timestamp")));
        const filteringSchedules = data.docs.map((doc) => ({...doc.data(),id: doc.id})).filter((data) => data.timestamp > now.getTime())
        setSchedules(filteringSchedules); 
        if(filteringSchedules.length === 0){
          setSchedules([{schedule:'未定', opponent:'未定', place:'未定', detail:'未定'}]);
        }
      }
      getSchedule();
  },[])

  return (
    <Container maxWidth='md' style={{minHeight: '90vh'}} >
      <Typography variant='h3' mt={4}> 今月~の試合日程 </Typography>
      <hr style={{
        background: "#000",
        height: "1px",
        width: "100%",
        border: "none",
        marginBottom: '30px'
      }}/>
      <ScheduleTable border={1}>
        <tr>
          <th>日時</th>
          <th>対戦相手</th>
          <th>場所</th>
          <th>詳細</th>
        </tr>
      {schedules.map((schedule) => (
          <tr key={schedule.id}>
            <td>{schedule.schedule}</td>
            <td>{schedule.opponent}</td>
            <td>{schedule.place}</td>
            <td>{schedule.detail}</td>
          </tr>
      ))}
      </ScheduleTable>
    </Container>
  )
}


const ScheduleTable = styled.table`
  width: 100%;
  font-size: 28px;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;

  th, td {
    border: 2px solid #d2e8f1;
    padding: 0.5em;
  }
  th {
    background-color: #1c6386;
    color: #fff;
    border: 2px solid #4d9bc1;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 700px){
    font-size: 20px;
  }
  @media screen and (max-width: 500px){
    font-size: 14px;
  }
`