import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'


export const AdminDeleteSchedule = () => {
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
      setSchedules(data.docs.map((doc) => ({...doc.data(),id: doc.id})).filter((data) => data.timestamp > now.getTime())); 
      }
    getSchedule();
},[])

  const handleDelete = async (id, index) => {
    const newSchedules = [...schedules];
    newSchedules.splice(index, 1);
    setSchedules(newSchedules);
    // Firestoreから削除
    await deleteDoc(doc(db, "schedule", id));
    alert('completed!');
  }

  return (
    <div>
      {schedules.map((schedule, index) => (
        <div key={schedule.id}>
          {schedule.schedule}.{schedule.opponent}戦 <button onClick={() => handleDelete(schedule.id, index)}>削除</button>
        </div>
      ))}
    </div>
  )
}
