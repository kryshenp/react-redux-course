import React from "react";
import "./UserOutput.css";

const useroutput = (props) => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>Hi! My name is {props.username}</p>
      <p>I hope I'll be overwritten!</p>
    </div>
  );
};

export default useroutput;
