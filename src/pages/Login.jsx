import React from 'react'
import Login from '../components/Login'
import Header from "../components/Header";

export default function LoginPage(props) {
  return(
        <>
        <Header user={props.location?.state} />
        <Login />
      </>
  );
}