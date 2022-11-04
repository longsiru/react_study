import React, { Component } from 'react'
import LifeCycleSample from "./LifeCycleSample";

function getRandonColor() {
  return '#' + Math.floor(math.random()* 16777215).toString(16);
}


class App extends Component {
  state = {
    color: '#000000', 
  };

  handleClick = () => {
    this.setState({color:getRandomColor()})
  }

  render(){
    return <div>
      <button onClick={this.handleClick}>랜덤색상</button>
      <LifeCycleSample color= {this.state} />
    </div>
  }
}
export default App;
