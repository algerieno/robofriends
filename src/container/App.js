import React, {Component} from 'react';
//import logo from '../logo.svg';
import './App.css';
import CardList from '../components/cardList';
//import {robots} from '../utilities/bank'



class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield : ''
    }
  }

componentDidMount() {
  fetch('https://my.api.mockaroo.com/robots.json?key=e5e19180')
    .then(response => {return response.json()})
    .then(users => this.setState({robots:users}))
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
        <h1 style={{color : 'white'}}>RoboFriends</h1>
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
