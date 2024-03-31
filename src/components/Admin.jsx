import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import { AdminEditComment } from './AdminEditComment';
import { AdminAddSchedule } from './AdminAddSchedule';
import { AdminAddResult } from './AdminAddResult';
import { AdminDeleteResult } from './AdminDeleteResult';
import { AdminDeleteSchedule } from './AdminDeleteSchedule';

export const Admin = () => {
    const [display, setDisplay] = useState('')
    
  return (
    <SDiv>
      <Typography variant="h4" gutterBottom mt={4}>
      管理者ページ
      </Typography>
      <ul>
        <li><button onClick={() => {setDisplay('comment')}}>Topコメントを編集</button></li>
        <li><button onClick={() => {setDisplay('result')}}>試合結果を追加</button></li>
        <li><button onClick={() => {setDisplay('schedule')}}>日程を追加</button></li>
        <li><button onClick={() => {setDisplay('deleteResult')}}>試合結果を削除</button></li>
        <li><button onClick={() => {setDisplay('deleteSchedule')}}>日程を削除</button></li>
      </ul>
      <hr />
      {display == 'comment' && <AdminEditComment />}
      {display == 'result' && <AdminAddResult />}
      {display == 'schedule' && <AdminAddSchedule />}
      {display == 'deleteResult' && <AdminDeleteResult/>}
      {display == 'deleteSchedule' && <AdminDeleteSchedule/>}
    </SDiv>
  )
}

const SDiv = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
`