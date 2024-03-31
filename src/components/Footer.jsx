import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Link to='/'>トップ</Link>
        <Link to='/member/' >選手一覧</Link>
        <Link to='/scorebook/' >スコアブック</Link>
        <Link to='/schedule/' >スケジュール</Link>
        <Link to='/admin/'>管理者</Link>
        <Link to='https://github.com/MoGomez-dev/Todo-React-Firebase' ><FaGithub /></Link>
      </FooterWrapper>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    height: 100px;
  }
`
const FooterWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 22px;
  }

  @media screen and (max-width: 1100px) {
    width: 80%;
    
    a {
      font-size: 18px
    }
  }
  
  @media screen and (max-width: 600px) {
    height: 100%;
    width: 95%;
    flex-wrap: wrap;

    a {
      font-size: 16px;
    }
  }
`

