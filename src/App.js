import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { NavLink, Routes, Route } from "react-router-dom";
import ListFilm from "./ListFilm";
import List from "./List.js";

function App() {
  const [list, setlist] = useState(List);
  const [filtredlist, setFilter] = useState(List);
  useEffect(() => {
    setFilter(list);
  }, [list]);

  const search = useRef();
  const filtrer = () => {
    setFilter(
      list.filter((e) =>
        e.name.toUpperCase().includes(search.current.value.toUpperCase())
      )
    );
  };

  const p = useRef();
  const p2 = useRef();
  const p3 = useRef();

 const add = () => {
  console.log('im here');
  setlist([
    ...list,
    {
      name: p.current.value,
      imgsr: p3.current.value,
      rate: p2.current.value,
    },
  ]);
  console.log('im here',list);
};
  const [rating, setRate] = useState(0);
  const onStarClick = (x) => {
    setFilter(list.filter((e) => e.rate >= x));
  };
  return (
    <div className="App">
      <div className="navebar">
        <h1 className="titer">NETFLIX</h1>
        <input
          type={"search"}
          placeholder="enter your search"
          ref={search}
          onChange={filtrer}
        ></input>

        <starRatingComponent
          name="ratel"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
        {/* <ListFilm  List={List} AddFilm={add} p={p} p1={p2} p3={p3}/> */}
       <div className="inputt">
          <br></br>
          <input type={"text"} ref={p} placeholder="name movie"></input>
          <input type={"text"} ref={p2} placeholder="name rate"></input>
          <input type={"text"} ref={p3} placeholder="image link"></input>

          <button onClick={add}>+</button>
        </div> 
         
      </div>
      <dr />

      <div className="movielist">
        {filtredlist.map((e, index) => (
          <NavLink to={index.toString()} params={{trailer: e}} key={index}>
            <p className="moie-item">
              <img className="imag-item" src={e.imgsr}></img>
              <div>
                {e.name}
                <br />
                {e.rate}
              </div>
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default App;
