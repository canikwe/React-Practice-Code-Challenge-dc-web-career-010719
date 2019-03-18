import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushiList: [],
      sushiTracker: [0, 4],
      money : 100,
      dirtyPlates : [],
      moneyToAdd: 5
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiData => this.setState({sushiList: sushiData}))
  }

  deliverSushi(){
    return this.state.sushiList.slice(this.state.sushiTracker[0], this.state.sushiTracker[1])
  }
  
  getSushi = () => {
    if (this.state.sushiTracker[1] < this.state.sushiList.length ) {
      this.setState(
        {sushiTracker: this.state.sushiTracker.map(num => num + 4)}
      )
      console.log('Gimme more sushi')
    } else {
      this.setState(
        {sushiTracker: [0, 4]}
      )
    }
  }

  addMoney = (e) => {
    e.preventDefault()
    
    this.setState({money: (this.state.money + this.state.moneyToAdd), moneyToAdd: 5})
  }

  handleChange = e => {
    this.setState({moneyToAdd: parseInt(e.target.value, 10)})
  }

  payForSushi = (sushi) => {
    this.setState({
      dirtyPlates: [...this.state.dirtyPlates, sushi],
      money: this.state.money - sushi.price
    })
    console.log("That's some good sushi")
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.deliverSushi()} getSushi={this.getSushi} payForSushi={this.payForSushi} moneyRemaining={this.state.money} dirtyPlates={this.state.dirtyPlates}/>
        <Table moneyRemaining={this.state.money} dirtyPlates={this.state.dirtyPlates}/>
        <SushiWallet moneyToAdd={this.state.moneyToAdd} handleChange={this.handleChange} addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;