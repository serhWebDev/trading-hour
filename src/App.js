import React, { Component } from 'react';

import './App.css';

import TradingHourApp from "./components/TradingHourApp";
import data from "./trading-hours.json";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      instruments: [],
    };
  };

  componentWillMount() {
    this.setState({instruments:data});
  }

  render() {
    return (
        <TradingHourApp instruments={this.state.instruments} isOpenNow={this.state.isOpenNow}/>
    );
  }
}

export default App;
