import React, { Component } from "react";

const ms = Date.now();
const getStatus = element =>
  ms >= +element.from && ms <= +element.to ? (
    <span style={{ color: "green" }}>Open</span>
  ) : (
    <span style={{ color: "red" }}>Close</span>
  );

const StatusTradingHours = props =>
  props.tradingHours.map((element, i) =>
    !props.isOpenNow ? (
      <div key={i}>{getStatus(element)}</div>
    ) : (
      ms >= +element.from &&
      ms <= +element.to && <div key={i}>{getStatus(element)}</div>
    )
  );

export default StatusTradingHours;
