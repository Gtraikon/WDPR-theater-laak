import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function DonerenPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
    localStorage.setItem("doneer", (queryParams.get('token')));

  function naarTheaterDoneerPagina(){
    navigate("/donerengoeddoel/doneren?goeddoel=20");
  }

  function naarGoedDoelDoneerPagina(){
    navigate("/donerengoeddoel");
  }

  return (
    <>
      <h1 style={{textAlign: "center"}}>Kies aan wat u wilt doneren</h1>
      <div className='doneerbuttons'>
        <button onClick={naarTheaterDoneerPagina}>Doneren aan het theater</button>
        <button onClick={naarGoedDoelDoneerPagina}>Doneren aan een goed doel</button>
      </div>
    </>
  );
}

export default DonerenPage;
