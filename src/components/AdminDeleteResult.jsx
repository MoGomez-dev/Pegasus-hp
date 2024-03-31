import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const AdminDeleteResult = () => {
  const [results, setResults] = useState([]);
  const [year, setYear] = useState('');
  const now = new Date();
  const thisYear = now.getFullYear();
  useEffect(() => {
    const getResults = async () => {
        const data = await getDocs(query(collection(db, "scorebook"), orderBy("id", "desc")));
        setResults(data.docs.map((doc) => ({...doc.data()})));
    }
    getResults();
    setYear(thisYear);
  },[])

  const handleDelete = async (id, index) => {
    const newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
    // Firestoreから削除
    await deleteDoc(doc(db, "scorebook", id));
    alert('completed!');
  }

  const handleChangeSelect = (e) => {
    setYear(e.target.value);
    let str = e.target.value.toString();
    console.log(str);
    // const selectedYear = new Date(e.target.value, 1, 1);
    // const selectedNextYear = new Date(e.target.value + 1, 1, 1);
    let newResults = [...results];
    newResults.filter((data) => data.date.includes(str));
    console.log(newResults);
    setResults(newResults);
  }

  return (
    <div>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChangeSelect}
        >
          <MenuItem value={thisYear}>{thisYear}</MenuItem>
          <MenuItem value={thisYear -1}>{thisYear -1}</MenuItem>
          <MenuItem value={thisYear - 2}>{thisYear - 2}</MenuItem>
          <MenuItem value={thisYear - 3}>{thisYear - 3}</MenuItem>
          <MenuItem value={thisYear - 4}>{thisYear - 4}</MenuItem>
      </Select>
      {results.map((res, index) => (
        <div key={res.id}>
          <button onClick={() => handleDelete(res.id, index)}>削除</button>
          {res.date} {res.batFirst.team} {res.batFirst.total} - {res.fieldFirst.total} {res.fieldFirst.team}
        </div>
      ))}
    </div>
  )
}
