import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import uniformLogoImage from "../img/uniform-logo.png"
import bgImage from '../img/bg-image.jpg'
import ground from '../img/ground.jpg'
import styled from 'styled-components'
import '../App.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { setIntroduction, setManagerComment } from '../features/dataSlice'
import { useDispatch, useSelector } from 'react-redux'


export const Home = () => {
  const dispatch = useDispatch();
  const { introduction, managerComment } = useSelector((store) => store.data)

  useEffect(() => {
    const getText = async () => {
      const docRef = doc(db, 'data', 'textData');
      const docSnap = await getDoc(docRef);
      const toSetData = docSnap.data();
      dispatch(setIntroduction(toSetData.introduction));
      dispatch(setManagerComment(toSetData.managerComment));
    }
    getText();
  },[])

  return (
      <Wrapper bg={bgImage}>
        <DirectorMessageWrapper>
        <Container maxWidth='md' >
          <Typography variant='h3' mt={4}> 監督だより </Typography>
          <hr style={{
            background: "#000",
            height: "1px",
            width: "100%",
            border: "none",
          }}/>
          <Typography variant='h5' >{managerComment}</Typography>
          <Img bg={uniformLogoImage} />
        </Container>
        </DirectorMessageWrapper>
        
        <IntroductionWrapper >
          <Container maxWidth='md' >
            <Typography variant='h4' mt={4}> チーム紹介 </Typography>
            <hr style={{
              background: "#000",
              height: "1px",
              width: "100%",
              border: "none",
            }}/>
            <Typography variant='h6' >チーム名:ペガサス</Typography>
            <Typography variant='h6' >所属:愛知県中村軟式野球連盟1部</Typography>
            <Typography variant='h6' >活動:日曜日(月2回程度)</Typography>
            <Typography variant='h6' >活動拠点:日比津公園</Typography>
            <Typography variant='h6' >会費:20000円程度/年(登録人数による)</Typography>
            <Typography variant='h6' >年齢層:20歳から60歳まで幅広い</Typography>
            <Typography variant='h6' >平均年齢:33歳</Typography>
            <Typography variant='h6' >{introduction}</Typography>
            <Typography variant='h6' >部員募集中！</Typography>
            <Typography variant='h6' >募集要項</Typography>
            <ul>
              <li><Typography variant='h6' >野球が好きな人。</Typography></li>
              <li><Typography variant='h6' >マナーを守れる人。</Typography></li>
              <li><Typography variant='h6' >70%ぐらい出席が可能な人。</Typography></li>
              <li><Typography variant='h6' >会費が払える人。</Typography></li>
              </ul>
            <Typography variant='h6' >参加してみたいと思われた方は体験からでも可能ですので、下記メールアドレス、吉川まで連絡ください。</Typography>
            <br />
            <Typography variant='h6' >motonadev@gmail.com</Typography>
            <br />
            <Typography variant='h6' >よろしくお願いします。</Typography>
            </Container>
        </IntroductionWrapper>
        <GroundWrapper >
          <Container maxWidth='md' >
            <Typography variant='h4' mt={4}> グラウンド </Typography>
            <hr style={{
              background: "#000",
              height: "1px",
              width: "100%",
              border: "none",
            }}/>
            <Typography variant='h5' mt={4}> 日比津公園 </Typography>
            <Typography variant='h6' mt={4} mb={2}> 愛知県名古屋市中村区日比津町１丁目１８ </Typography>
            <GroundImage src={ground} />
          </Container>
        </GroundWrapper >
      </Wrapper>
  )
}

const GroundImage = styled.img`
  height: auto;
  width: 90%;
`

const Img = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 350px;
  width: 350px;
  margin-top: 30px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${props => props.bg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
`

const DirectorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 100px;
  padding-top: 100px;
  width: 100%;
  color: #ffffff;
`
const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 50px;
  width: 100%;
  background-color: #e6e6e6;
`
const GroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 50px;
  width: 100%;
  background-color: #e6e6e6;
`

