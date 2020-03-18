import React, { Component } from 'react';

import  classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Vali', age: 38},
      { id: '2', name: 'Bethany', age: 26},
      { id: '3', name: 'Jacob', age: 33}
    ],
    otherState: 'some other state',
    showPersons: false
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
    }
      

    return (
        <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked = {this.togglePersonHandler} />
        {persons}
    </div>
    
    );

  }
}



export default App