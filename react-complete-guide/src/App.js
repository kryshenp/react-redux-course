import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Pavlo", age: 32 },
      { name: "Dmytro", age: 27 },
      { name: "Jhonn", age: 66 },
    ],
  };

  switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS ---->this.state.persons[0].name = "Pablo";
    this.setState({
      persons: [
        { name: "Pavlo", age: 32 },
        { name: "Dmytrooo", age: 27 },
        { name: "Jhonn", age: 37 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbie: Raicing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
