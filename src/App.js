import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import style from 'styled-components';

import Person from './Person/Person';

const StyledButton = style.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`;

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
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) =>this.nameChangeHandler(event, person.id)}/>
          })}
        </div>        
      );
      // style.backgroundColor = 'red';
      // style[':hover'] ={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

   // let classes = ['red', 'bold'].join(' '); 
   let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      classes.push('bold'); // classes = ['red' 'bold']
    }

    return (
     // <StyleRoot>
        <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toogle Name
        </StyledButton> 
        {persons}
    </div>
     // </StyleRoot>
    
    );

    // return React.createElement('div', {className: 'App'},
    //  React.createElement('h1', null, "does this work now?"))
  }
}



export default App
//here radium is a higher order component
//export default Radium(App);
