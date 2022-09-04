import { Component } from 'react';
import './App.css';
import Person from './component/Person';

export default class App extends Component {
constructor(props){
  super(props)
  this.state={show:false}
}

handleclick=()=>this.setState({show:!this.state.show})

  render(){
  return (
    <div className="App">
      <h1>checkpoint STATE</h1>
      <button onClick={this.handleclick}>show/hide</button>
      {this.state.show?<Person/>:null}      
    </div>
  );
}
}


