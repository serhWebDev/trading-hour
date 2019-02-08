import React, { Component } from 'react';

import TradingInterval from './TradingInterval';

const ms = Date.now();

class TradingHoursData extends Component {
    render() {
        return this.props.tradingHours.map((element, i) => {
            switch (this.props.isOpenNow === false) {
                case true:
                    return ( <TradingInterval key={i} time={element}/> );
                default:
                    if (ms >= + element.from && ms <= +element.to){
                        return ( <TradingInterval key={i} time={element}/> );
                    }
            }
        });
    }
}

export default TradingHoursData;
