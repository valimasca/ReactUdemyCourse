import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toogleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);


  //useEffect is only called after the jsx is returned
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
  //Http request...
  //const timer = 
  // setTimeout(() => {
  //   alert('Saved data to Cloud!');
  // }, 1000);
  toogleBtnRef.current.click();

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
            <button ref={toogleBtnRef} className={btnClass} alt={props.showPersons} 
            onClick={props.clicked}>
            Toogle Name
            </button> 
           <button onClick={authContext.login}>Log In</button>
        </div>
        
    );
};

export default React.memo(cockpit);