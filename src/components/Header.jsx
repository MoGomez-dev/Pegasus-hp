import React from 'react'
import styled from 'styled-components'
import MyFont from '../fonts/F5.6-REGULAR.OTF'
import { Link } from 'react-router-dom';
import TemporaryDrawer from './Drawer';


export const Header = () => {
  
  return (
    <HeaderContainer>
      <HeaderWrapper >
        <Link to='/' ><h1>Pegasus</h1></Link>
        <HeaderNavList>
            <ul>
                <li>
                    <Link to='/' >Top</Link>
                </li>
                <li>
                    <Link to='/member/' >選手一覧</Link>
                </li>
                <li>
                    <Link to='/scorebook/' >スコアブック</Link>
                </li>
                <li>
                    <Link to='/schedule/' >スケジュール</Link>
                </li>
            </ul>
        </HeaderNavList>
        <TemporaryDrawer />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderWrapper = styled.nav`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 30px;
        font-weight: normal;
        color: #ffffff;
        font-family: 'my-font', sans-serif;
    }

    @font-face {
      font-family: 'my-font';
      src: url(${MyFont}) format('truetype');
    }

    @media screen and (max-width: 800px) {
      width: 90%;
      h1 {
        font-size:28px;
      }
    }
  `

const HeaderContainer = styled.header`
    height: 50px;
    width: 100%;
    background-color: #1b1b1b;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavList = styled.div`
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;

      li {
      padding-right: 22px;
    
        a {
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.2s; 
          font-size: 15px;
      
          &:hover {
            color: #000000;
          }
        }

        h6 {
          font-size: 20px;
        }
      }
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`

