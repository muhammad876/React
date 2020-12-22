import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class App extends Component {
  state = { name: 0 }
  render() { 
    return ( <div>
      <div className="row">
        <div className="col col-md-1" >
        <div className="badge badge-danger">
        {this.state.name}
      </div>
        </div>
        <div className="col col-md-1">
        <button className="btn btn-warning" onClick={this.reset}>
      Reset
    </button>
        </div>
        <div className="col col-md-1">
        <button className="btn btn-success" onClick={this.inc}>
        Increment
      </button> 
        </div>
        <div className="col col-md-1">
        <button className="btn btn-info" onClick={this.dec}>
        Decrement
      </button>
        </div>
        <div className="col col-md-1">
        <button className="btn btn-primary" onClick={this.mul}>
       Multiply
      </button>
        </div>
      </div>
    
   
     
     
     
     
    </div>
       );
  }

reset = () => {
  this.setState({name : 1})
}


  mul = () => {
    this.setState({name :  this.state.name*this.state.name})
  }
  inc = () => {
    this.setState({name : this.state.name+1});
  }
  dec = () => {
    this.setState({name : this.state.name-1});
  }

}
 
export default App;