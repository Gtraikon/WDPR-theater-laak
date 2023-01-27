import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function DonerenPage() {
  const navigate = useNavigate();

  function naarTheaterDoneerPagina(){
    navigate("/donerengoeddoel/doneren?goeddoel=20");
  }

  function naarGoedDoelDoneerPagina(){
    navigate("/donerengoeddoel");
  }

  return (
    <>
      <h1 style={{textAlign: "center"}}>Kies aan Wat u wilt doneren</h1>
      <div className='doneerbuttons'>
        <button onClick={naarTheaterDoneerPagina}>Doneren aan het theater</button>
        <button onClick={naarGoedDoelDoneerPagina}>Doneren aan een goed doel</button>
      </div>
    </>
  );
}

export default DonerenPage;
