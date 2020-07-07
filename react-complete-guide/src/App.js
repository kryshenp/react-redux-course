import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Pavlo", age: 32 },
      { id: "zxcv", name: "Dmytro", age: 27 },
      { id: "qwer", name: "Jhonn", age: 66 },
    ],
  };

  // we can use
  // togglePersonsHandler(){} syntax but we'll get problems with this keyword
  // so we gonna use arrow f-n here. It'l make sure that 'this' keyword always, under all circumstances
  // returns to this class.

  // here I want to toggle a property showPersons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; //this is true or false
    // here we call this.setState() to adjust the state
    this.setState({
      // here we set that showPersons is equal to what does show is not
      showPersons: !doesShow,
    });
  };

  // this is a handler for deleting the items from our array.
  // we gonna use it in case of clicking the JSX element of the array.

  // So we're getting acces to all the persons in the State (see const persons)
  // removing 1 element we wanna to remove by using the index of the person === splice
  //  and updating the state === setState
  // In JS objects and Arrays are reference types, I get persons from my state, actually I get
  // a pointer to the original persons Object managed by react (original State I should say)
  // by splicing I already mutated this original data - it's a bad practice.
  // a good practice is to create a copy of original data before manipulating it.
  // a siple way of doing it is by calling a slice() method. Slice() without arguments simply
  // copies that array and turns in the new one which stores in the persons constant.
  // so I can safely edit this new one by splicing and update the React state with my new Array
  // the Alternative to const persons = this.state.persons.slice(); would be use the SPREAD operator == ES6 feature
  // we set persons equals to the new array and this array is a spread operator ... It spreads elements of the array into a list
  // of elements and add it to the new array. This updates the state in the unmutable fashion by creating a copy of
  // change it and updating the state with setState().

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // first of all I'll detch all the persons
    const persons = [...this.state.persons];
    // here I wanna create a new version of the array by calling splice method
    // I want to splice person Index and splice "1" element.
    // SPLICE Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    persons.splice(personIndex, 1);
    // after that I can call this.setState and set persons to my persoons constant,
    // which was updated though by spicing 1 element
    this.setState({ persons: persons });
  };

  // apart from the event I need the id of the element
  nameChangedHandler = (event, id) => {
    // we want to update teh state but of course only for the person for which into input fild was typed
    // we need to find this single person by reaching out to the person state by calling the default JS findIndex method
    // this method finds element in the array but then gives us the index of that element
    // findIndex takes a function as an argument and just as map() it'll execute this function into every element in the array.
    // unlike map() I don't map this element into smth new, instead I return true/false depending\
    const personIndex = this.state.persons.findIndex((p) => {
      // if p.id is equal to the argument I received in the function I return true.
      return p.id === id;
    });
    // then I can get the peson itself by reaching this.state.persons[personIndex]
    // just as before we use spread operator to NOT mutate the state directly
    // so we're creating the new JS Object and spreading it. It'll distribute all properties of the object into the new object we created here .
    const person = {
      ...this.state.persons[personIndex],
    };
    // Alternative approach,
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // now I need to update the name. I can do this because I got a copy, I don't manipulate the original object now.
    person.name = event.target.value;

    // now I need to update the array of course
    const persons = [...this.state.persons];
    // here the update
    persons[personIndex] = person;

    // setting the new state of copy of old array with the updated name
    this.setState({
      persons: persons,
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

    // by default people variable is NULL
    // we render either nothing or people
    let people = null;

    // if this state showPersons prop === true I want to set my "people"
    // variable to some JSX code.
    if (this.state.showPersons) {
      people = (
        <div>
          {/* to render the list of people we use single {} to see this as JSX code */}
          {/* we want to render our persons array in a state, 
          so this.state.persons referring us to the Persons array*/}
          {/* we need to convert JS array to JSX and Vanilla js offers us a function map()*/}
          {/* map() simply maps every element in given array into something else
          it does this by executing a method on given array. This method is map() method
          It takes an array item as first input, */}
          {this.state.persons.map((human, index) => {
            // here I have to return somethign - I should return what I want to map this item into
            // so here I map it into a <Person /> component in the end.
            // This BASICALLY returns a JS array but with JSX objects (Person component) inside of it
            // we add index argument to delete THIS item from the array,
            return (
              <Person
                // so here I take an arry item and name property, same for age
                name={human.name}
                age={human.age}
                // click references the  deletePersonHandler method.
                //
                click={() => this.deletePersonHandler(index)}
                // click={this.deletePersonHandler.bind(this, index)}
                // key prop is a default prop React expects to find on every element no matter it's
                // a custom component or a default HTML element which we render through a list. this hey prop
                // helps React to update the list efficiently - name, age and index could change, so we gonna
                // use the human.id for that. It's comparisoin of future and the past to React.
                key={human.id}
                // changed should point us to some method - nameChangedHandler
                // here i use this ()=>{} function syntax to conviniently pass that data.
                // overall (event) => this.nameChangedHandler(event, human.id) function is a function which is executed on the
                // oncChange event. So we work with event object and pass the event and id there .
                changed={(event) => this.nameChangedHandler(event, human.id)}
              ></Person>
            );
          })}
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
        {/* Here I output my "people variable'" - either noting or all the people */}
        {people}
      </div>
    );
  }
}

export default App;
