import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

function Cards(props) {
 
  let navigate = useNavigate();

    const cardDetail = () => {
        navigate('/Cardsdetails', { state: { id: 1, name: 'waqas',email:'m.waqas@gmail.com',cell:'03222946642' } });
    }


  // useEffect(() => {
  // }, [])



  return (
    <div>
      Cards
      <button onClick={() => cardDetail()}>Cards detail</button>
    </div>
  );
}

export default Cards;