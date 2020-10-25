import React from 'react'
import CreateCatador from '../components/CreateCatador'
import Header from "../components/Header";

export default function CreateCatadorForm(props) {
  return(
        <>
        <Header user={props.location?.state} />
        <CreateCatador />
      </>
  );
}