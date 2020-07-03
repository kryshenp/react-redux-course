import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really workin'!</p>
        <Person name="Pavlo" age="32" />
        <Person name="Dmytro" age="27">
          Hobbie: Raicing
        </Person>
        <Person name="Jhonn" age="66" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );
  }
}

export default App;
