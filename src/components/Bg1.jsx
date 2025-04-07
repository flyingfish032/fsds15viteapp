import React from "react";
import { useDispatch } from "react-redux";
import "./P2p2.css"

const P2p2 = () => {
  const dispatch = useDispatch();

  function navigation(event) {
    dispatch({ type: "page", data: event.currentTarget.getAttribute("val") });
  }

  return (
    
    <div className="bo">
      <button onClick={navigation} val={"Page1"}>BIG FONT</button> <br />
      <button onClick={navigation} val={"P2p1"}>SMALL FONT</button>
      <br /><br /><br />
      <h1>THIS IS BIG FONT</h1>
      <button onClick={navigation} val={"Page1"}>CHANGE BACKGROUND</button>
    </div>
   
  );
};

export default P2p2;
