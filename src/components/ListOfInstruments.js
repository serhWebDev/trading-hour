import React, { Component } from "react";

import TradingHoursData from "./TradingHoursData";
import StatusTradingHours from "./StatusTradingHours";

const ListOfInstruments = props =>
  props.instruments.map(el => {
    return (
      <tr key={el.instrumentID}>
        <td>{el.instrumentID}</td>
        <td>
          <b>{el.name}</b>
        </td>
        <td>
          <TradingHoursData
            tradingHours={el.tradingHours}
            isOpenNow={props.isOpenNow}
          />
        </td>
        <td>
          <StatusTradingHours
            tradingHours={el.tradingHours}
            isOpenNow={props.isOpenNow}
          />
        </td>
      </tr>
    );
  });

export default ListOfInstruments;
