import React, { useEffect, useRef, useState } from 'react';
import "./App.css";


function ListFilm({List,AddFilm ,p , p2 ,p3}) {


  return (
    <div>
      <div className="inputt">
        <br></br>
        <input type={"text"} ref={p} placeholder="name movie"></input>
        <input type={"text"} ref={p2} placeholder="name rate"></input>
        <input type={"text"} ref={p3} placeholder="image link"></input>

        <button onClick={AddFilm}>+</button>
      </div>
    </div>
  );
}

export default ListFilm;
