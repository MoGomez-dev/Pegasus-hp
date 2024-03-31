import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import { DataTable } from './DataTable'
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Pagination from '@mui/material/Pagination';


export const ScoreBook = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [displayResults, setDisplayResults] = useState([])
  useEffect(() => {
    const getResults = async () => {
        const data = await getDocs(query(collection(db, "scorebook"), orderBy("id", "desc")));
        setResults(data.docs.map((doc) => ({...doc.data()})));
        setDisplayResults((data.docs.map((doc) => ({...doc.data()})).slice(0,5)))
        console.log(data.docs.map((doc) => ({...doc.data()})))
    }
    getResults();
  },[])

  const onChangePagination = (e, pageNum) => {
    setPage(pageNum);
    setDisplayResults(results.slice((pageNum * 5 - 5),(pageNum * 5)));
  }

  return (
    <Container maxWidth='md' >
      <Typography variant='h3' mt={4}> 試合結果 </Typography>
      <hr style={{
        background: "#000",
        height: "1px",
        width: "100%",
        border: "none",
        marginBottom: '30px'
      }}/>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <Pagination count={Math.ceil(results.length / 5) } page={page} onChange={onChangePagination} />
      </div>
      {displayResults.map((result) => (
        <div>
          <hr style={{
            background: "#000",
            height: "1px",
            width: "100%",
            border: "none",
            marginBottom: '30px'
          }}/>
          <DataTable matchResult={result} />
        </div>
      ))}
    </Container>
  )
}
