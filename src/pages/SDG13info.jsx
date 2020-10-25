import React from 'react'
import EnvironmentalImpact from '../components/SDG13'
import Header from "../components/Header";

export default function SDG13info(props) {
  return(
    <>
    <Header user={props.location?.state} />
    <EnvironmentalImpact/>
  </>
  );
}