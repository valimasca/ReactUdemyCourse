import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Vali', age: 38},
      { name: 'Bethany', age: 26},
      {name: 'Jacob', age: 33}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // Dont do this: this.state.persons[0].name = "Valer";
    this.setState({persons: 
      [
        { name: newName, age: 38},
        { name: 'Bethany', age: 26},
        {name: 'Will', age: 39}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({persons: 
      [
        { name: 'Max', age: 38},
        { name: event.target.value, age: 26},
        {name: 'Will', age: 39}
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toogle Name</button>

        {
        this.state.showPersons ? 
        <div>
        <Person 
        name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Valerutz')}
        changed={this.nameChangeHandler}>My Hobbies: Running</Person>
        <Person 
        name={this.state.persons[2].name} age={this.state.persons[2].age}/>

        </div> : null
        }
        
      </div>
    );

    // return React.createElement('div', {className: 'App'},
    //  React.createElement('h1', null, "does this work now?"))
  }
}

export default App;
