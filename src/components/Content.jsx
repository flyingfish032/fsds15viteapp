import React from "react";
import { useSelector } from "react-redux";
import Page1 from "./Page1";
import P2p1 from "./P2p1";
import P2p2 from "./P2p2";
import Bg1 from "./Bg1";

const Content = () => {
  const page = useSelector((state) => state); 

  function Page() {
    switch (page) {
      case "Page1":
        return <Page1 />;
      case "P2p1":
        return <P2p1 />;
      case "P2p2":
        return <P2p2 />;
        case "Bg1":
        return <Bg1/>;
      default:
        return <Page1 />;
    }
  }

  return (
    <div>
      <Page />
    </div>
  );
};

export default Content;
