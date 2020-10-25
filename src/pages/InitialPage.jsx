import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Footer from '../components/Footer';
import Header from "../components/Header";

export default function InitialPage(props) {
  return (
    <div>
      <Header user={props.location?.state} />
      <Logo />
      <SearchBar />
      <Footer />
    </div>
  );
}
