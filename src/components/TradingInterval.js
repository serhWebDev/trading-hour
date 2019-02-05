import React, { Component } from 'react';

import TimeLimit from './TimeLimit';

class TradingInterval extends Component {
    render() {
        return (
            <div>
                <TimeLimit time={this.props.time.from}/>
                <span> - </span>
                <TimeLimit time={this.props.time.to}/>
            </div>
        );
    }
}

export default TradingInterval;