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

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    // DON'T DO THIS ---->this.state.persons[0].name = "Pablo";
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Dmytrooo", age: 27 },
        { name: "Jhonn", age: 37 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Pavlo", age: 32 },
        { name: event.target.value, age: 27 },
        { name: "Jhonn", age: 66 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Paooooooolo")}
            changed={this.nameChangedHandler}
          >
            Hobbie: Raicing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.togglePersonsHandler()} style={style}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );/
  }
}

export default App;
