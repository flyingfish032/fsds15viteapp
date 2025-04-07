import React from "react";
import { useDispatch } from "react-redux";

const P2p1 = () => {
  const dispatch = useDispatch();

  function navigation(event) {
    dispatch({ type: "page", data: event.currentTarget.getAttribute("val") });
  }

  return (
    <div>
           <button onClick={navigation} val={"Page1"}>BIG FONT</button> <br />
           <button onClick={navigation} val={"P2p1"}>SMALL FONT</button>
      {/* <a onClick={navigation} val={"P2p1"}>SMALL FONT</a> */}
      <br /><br /><br />
      <h5>THIS IS SMALL FONT</h5>

      <button onClick={navigation} val={"P2p2"}>CHANGE BACKGROUND</button>
    </div>
  );
};

export default P2p1;
