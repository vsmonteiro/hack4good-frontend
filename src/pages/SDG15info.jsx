import React from 'react'
import Partners from '../components/SDG15'
import Header from "../components/Header";

export default function SDG15info(props) {
  return(
    <>
    <Header user={props.location?.state} />
    <Partners/>
  </>
  );
}