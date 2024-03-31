import React from 'react'
import { MemberCard } from './MemberCard'
import { data } from '../memberData'
import { Container, Typography, Grid } from '@mui/material'

export const Member = () => {
  return (
      <Container maxWidth='md'>
        <Typography variant='h3' mt={4}> 選手紹介 </Typography>
          <hr style={{
            background: "#000",
            height: "1px",
            width: "100%",
            border: "none",
          }}/>
        <Grid container spacing={4} mt={0} mb={2} justifyContent="left">
          {data.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.number}>
              <MemberCard member={member}/>
            </Grid>
        ))}
        </Grid>
      </Container>
  )
}

