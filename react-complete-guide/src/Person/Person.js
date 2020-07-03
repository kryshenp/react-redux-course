import React from "react";

const person = (props) => {
  return (
    <p>
      I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old, I
      live here for {props.age} years!
    </p>
  );
};

export default person;
