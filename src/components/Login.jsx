import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux'
import { setLogin } from '../features/dataSlice'

export const Login = () => {
    const [userData, setUserData] = useState({});
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        const getUsers = async () => {
            const docRef = doc(db, 'data', 'login');
            const docSnap = await getDoc(docRef);
            setUserData(docSnap.data());
        }
        getUsers();
    },[])

    const onClickLogin = () => {
        if( !userName || !password ){
            alert('UserNameまたはパスワードが未入力です。');
            return;
        }
        if(userData.loginId == userName && userData.password == password){
            dispatch(setLogin());
            return;
        }
        alert('failed!');
    }

  return (
    <>
        <Container maxWidth="sm">
            <FormDiv >
                <TextField id="outlined-basic" label="user name" variant="outlined" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Button variant="outlined" onClick={onClickLogin}>Login</Button>
            </FormDiv>
        </Container>
    </>
  )
}

const FormDiv = styled.div`
    height: 89vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`