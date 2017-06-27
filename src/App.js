import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import axios from 'axios'
import { getGamesAmerica } from 'nintendo-switch-eshop'
  // axios.get('http://www.nintendo.com/json/content/get/filter/game?system=switch&sort=title&direction=asc&shop=ncom')
  // .then(res => {
  //   console.log(res)
  // })



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }


  componentWillMount() {
    getGamesAmerica()
    .then( games => {
      console.log(games)
      this.setState({
        games
      })
      console.log(this.state)
    })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>test</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.games}
        </p>
      </div>
    );
  }
}

export default App;
