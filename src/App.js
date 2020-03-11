import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Vali', age: 38},
      { name: 'Bethany', age: 26},
      {name: 'Jacob', age: 33}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // Dont do this: this.state.persons[0].name = "Valer";
    this.setState({persons: 
      [
        { name: 'Valer', age: 38},
        { name: 'Bethany', age: 26},
        {name: 'Jacob', age: 34}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Running</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'},
    //  React.createElement('h1', null, "does this work now?"))
  }
}

export default App;
