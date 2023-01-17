import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";

function Cardsdetails(props) {

  const location = useLocation();

  // useEffect(() => {
  // }, [])



  return (
    <div>
      Cardsdetails
      <p>{location.state.id}</p>
      <p>{location.state.name}</p>
      <p>{location.state.email}</p>
      <p>{location.state.cell}</p>
    </div>
  );
}

export default Cardsdetails;