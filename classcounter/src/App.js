import './App.css';
import React, {Component} from 'react';


class App extends Component{

  constructor(props){
    super(props);

    this.state={
      count : 0
    }
  }

  increm = () =>{
    this.setState(prev=>({
      count : prev.count+1
    }));
  }

  decrem = () =>{
    this.setState(prev=>({
      count : prev.count - 1
    }))
  }
render(){
  return(
    <div className='App'>
      <h1>Counter App</h1>
      <h5>Count: {this.state.count}</h5>
      <button onClick={this.increm}>Increment</button>
        <button onClick={this.decrem}>Decrement</button>
    </div>
  )
}
}

export default App;