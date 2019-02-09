import React from "react";

import TimeLimit from "./TimeLimit";

const TradingInterval = props => (
  <div>
    <TimeLimit time={props.time.from} style={{ float: "left" }} />
    <span> - </span>
    <TimeLimit time={props.time.to} style={{ float: "right" }} />
  </div>
);

export default TradingInterval;
