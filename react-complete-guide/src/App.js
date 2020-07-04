import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component {
const app = (props) => {
  // render() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Pavlo", age: 32 },
      { name: "Dmytro", age: 27 },
      { name: "Jhonn", age: 66 },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS ---->this.state.persons[0].name = "Pablo";
    setPersonsState({
      persons: [
        { name: "Pavlo", age: 32 },
        { name: "Dmytrooo", age: 27 },
        { name: "Jhonn", age: 37 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Hobbie: Raicing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm a React App!!!")
  // );
};
// }

export default app;
