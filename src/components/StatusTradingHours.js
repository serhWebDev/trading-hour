import React, { Component } from 'react';

const ms = Date.parse(Date());

class StatusTradingHours extends Component {
    render() {
        function getStatus(element) {
            if (ms >= + element.from && ms <= +element.to){
                return (<span style={{color: 'green'}}>Open</span>);
            } else {
                return (<span style={{color: 'red'}}>Close</span>);
            }
        }

        return this.props.tradingHours.map((element, i)=>{
            switch (this.props.isOpenNow === false) {
                case true:
                    return (<div key={i}>{getStatus(element)}</div>);
                default:
                    if (ms >= + element.from && ms <= +element.to){
                        return (<div key={i}>{getStatus(element)}</div>);
                    }
            }
        });
    }
}

export default StatusTradingHours;