import React from "react";
import { useSelector } from "react-redux";
import Content from "./Content";

const Homee = () => {
  const page = useSelector((state) => state);

  return (
    <div>
      <Content /> 
    </div>
  );
};

export default Homee;
