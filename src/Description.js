import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "./List.js";
import "./desc.css";
import ReactPlayer from "react-player";

function Description() {
  const { id } = useParams();
  const item = List[id];
  console.log(item);
  return (

    <div className="trailer ">
      {item && item.desc + "======>"}
      <div className="itmmm">
      <ReactPlayer controls url={item?.trailer} />  
      </div>  

    </div>

  );
}

export default Description;
