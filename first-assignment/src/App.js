import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    people: [{ username: "Pali" }, { username: "Tibi" }],
  };

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput username={this.state.people[0].username} />
        <UserOutput username={this.state.people[1].username} />
      </div>
    );
  }
}

export default App;
