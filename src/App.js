import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './cardList';
import {robots} from './bank'



class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield : ''
    }
  }

searchChange = (event) => {
  this.setState({searchfield: event.target.value})
  
}

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.first_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (  
      <div className="tc">
        <h1>RoboFriends</h1>
        <input type="text" 
               placeholder="search"  
               className="mb3 bg-light-blue w5 h2 pa3 b--solid b--blue bw1 br2 outline-0"
               onChange={this.searchChange}/>
        <hr/>
        <CardList robots = {filteredRobots} ></CardList>
      </div>

    )
  }
}

export default App;
