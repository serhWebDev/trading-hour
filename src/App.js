import React, { Component } from "react";

import TradingHourApp from "./components/TradingHourApp";
import data from "./trading-hours.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instruments: data
    };
  }

  render() {
    return <TradingHourApp instruments={this.state.instruments} />;
  }
}

export default App;
