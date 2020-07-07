import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old,
        I live here for {props.age} years!
      </p>
      <p>{props.children}</p>
      {/* we need to provide this .changed property poining to something eventListener or some method
       which correctly updates the state.  */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
