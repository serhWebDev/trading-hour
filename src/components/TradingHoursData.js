import React from "react";

import TradingInterval from "./TradingInterval";

const ms = Date.now();

const TradingHoursData = props =>
  props.tradingHours.map((element, i) =>
    !props.isOpenNow ? (
      <TradingInterval key={i} time={element} />
    ) : (
      ms >= +element.from &&
      ms <= +element.to && <TradingInterval key={i} time={element} />
    )
  );

export default TradingHoursData;
