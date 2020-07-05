import React from "react";

const userinput = (props) => {
  const inputStyle = {
    border: "2px solid red",
    color: "green",
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={inputContainerStyle}>
      <input
        type="text"
        onChange={props.changed}
        style={inputStyle}
        value={props.defaultValue}
      />
    </div>
  );
};

export default userinput;
