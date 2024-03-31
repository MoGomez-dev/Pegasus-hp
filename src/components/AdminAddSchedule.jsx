import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import styled from 'styled-components'

export const AdminAddSchedule = () => {
  const [opponent, setOpponent] = useState('');
  const [schedule, setSchedule] = useState('');
  const [place, setPlace] = useState('日比津');
  const [detail, setDetail] = useState('');
  const [isBlank, setIsBlank] = useState(true);

  useEffect(() => {
    setIsBlank(false);
    if(opponent == ''){
      setIsBlank(true);
    }
    if(schedule == ''){
      setIsBlank(true);
    }
    if(place == ''){
      setIsBlank(true);
    }
    if(detail == ''){
      setIsBlank(true);
    }
    ;
  },[opponent, schedule, place, detail])

  const onChangeText = (e, name) => {
    switch (name) {
      case 'opponent': 
        setOpponent(e.target.value);
        break;
      case 'place': 
        setPlace(e.target.value);
        break;
      case 'schedule': 
        setSchedule(e.target.value);
        break;
      case 'detail': 
        setDetail(e.target.value);
        break;
    }
  }

  const onClickAdd = async () => {
    if(schedule == ''){
      alert('日付が入力されていません');
      return;
    }
    if(opponent == ''){
      alert('対戦相手が入力されていません');
      return;
    }
    const date = new Date(schedule);
    const timestamp = date.getTime();
    const formattedSchedule = schedule.replaceAll('-','/').replace('T',' ')
    // Firestoreに追加
    await addDoc(collection(db, "schedule"), {opponent, schedule: formattedSchedule, timestamp, place, detail});
    setOpponent('');
    setSchedule('');
    setPlace('日比津');
    setDetail('');
    alert('completed!');
  }

  return (
    <div>
      <InputArea>
            対戦相手:<input type='text' value={opponent} onChange={(e) => onChangeText(e,'opponent')} />
            <br />
            日程:<input type="datetime-local" step='600' min='2023-12-01T00:00' value={schedule} onChange={(e) => onChangeText(e,'schedule')} />
            <br />
            場所:<input type='text' value={place} onChange={(e) => onChangeText(e,'place')} />
            <br />
            詳細:<input type='text' value={detail} onChange={(e) => onChangeText(e,'detail')} />
            <button onClick={onClickAdd} disabled={isBlank} >追加</button>
      </InputArea>
    </div>
  )
}


const InputArea = styled.div`
    padding: 30px 0px;
    font-size: 20px;

    input {
        padding: 5px 30px;
        margin: 15px 20px;
        border-radius: 5px;
        font-size: 20px;
    }

    button {
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #f1cfcf;
        font-size: 20px;
    }
`