import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setIntroduction, setManagerComment } from '../features/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase';

export const AdminEditComment = () => {
  const dispatch = useDispatch();
  const { introduction, managerComment } = useSelector((store) => store.data)
  const [ editIntroduction, setEditIntroduction ] = useState(introduction);
  const [ editManagerComment, setEditManagerComment ] = useState(managerComment);

  const editComment = async () => {
    await setDoc(doc(db,"data", "textData"),{
      introduction: editIntroduction,
      managerComment: editManagerComment,
    })
    dispatch(setManagerComment(editManagerComment));
    dispatch(setIntroduction(editIntroduction));
    alert('completed');
  }
  return (
    <div>
      <TextField
        id="filled-multiline-static"
        label="監督だより"
        fullWidth
        multiline
        rows={4}
        value={editManagerComment}
        variant="filled"
        onChange={(e) => {setEditManagerComment(e.target.value)}}
      />
      <br />
      <br />
      <TextField
        id="filled-multiline-static"
        fullWidth
        label="チーム紹介"
        multiline
        rows={4}
        value={editIntroduction}
        variant="filled"
        onChange={(e) => {setEditIntroduction(e.target.value)}}
      />
      <Button variant="outlined" onClick={editComment}>変更</Button>
    </div>
  )
}
