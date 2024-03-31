import React from 'react'
import { useSelector } from 'react-redux'
import { Admin } from './Admin';
import { Login } from './Login';

export const BranchAdmin = () => {
    const { isLogin } = useSelector((store) => store.data);
  return (
    <div>{isLogin ? <Admin /> : <Login />}</div>
  )
}
