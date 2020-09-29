import React from 'react';
import ReactDOM from 'react-dom';
import Sports from './App';
ReactDOM.render(<Sports />, document.getElementById('files'));


// Class Component

class Music extends React.Component {
  render() {
      return <p> I like listening to music during my leisure time (written in index.js).</p>;
  }
}
ReactDOM.render(<Music />, document.getElementById('class'));

// Function Component

function Rock() {
  return <p>One of my most favourite music gernes is Rock (written in index.js).</p>;
}
ReactDOM.render(<Rock />, document.getElementById('function'));

// Constructor

class Car extends React.Component {
  constructor(props){
    super();
    this.state={name: "VolksWagen"};
  }
  render(){
    return <p>Today I will buy a new car the name of which is {this.state.name}</p>;
  }
}
ReactDOM.render(<Car />, document.getElementById('constructor'));

// Components in the Components

class Job extends React.Component {
  render(){
    return <p>I have a dream to become a programmer</p>;
  }
}

class Person extends React.Component {
  render(){
    return(
      <div>
        <p>My name is Igor Torgaiev. I wish to work at your company</p>
        <Job />
      </div>
    );
  }
}
ReactDOM.render(<Person />, document.getElementById('root'));