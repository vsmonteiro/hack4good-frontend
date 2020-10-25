import React from 'react'
import Objectives from '../components/Objectives'
import Header from "../components/Header";

export default function ObjectivesPage(props) {
  return(
    <>
    <Header user={props.location?.state} />
    <Objectives />
  </>
  );
}