import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //Http request...
      //const timer = 
      setTimeout(() => {
        alert('Saved data to Cloud!');
      }, 1000);
      return () => {
        //clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []); // this means that useEffect is only triggerd when a person is changed [props.persons]
// if you want just to run componentDidMount you pass an empty array instead of what we have on line 8
    
useEffect(() => {
  console.log('[Cockipt.js] 2nd useEffect');
  return () => {
    console.log('[Cockpit.js] 2nd cleanup work in useEffect');
  };
});


let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    

    if (props.personsLength <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <=1) {
      assignedClasses.push(classes.bold); // classes = ['red' 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} alt={props.showPersons} 
            onClick={props.clicked}>
            Toogle Name
            </button> 
        </div>
        
    );
};

export default React.memo(cockpit);