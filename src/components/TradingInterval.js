import React, { Component } from 'react';

import TimeLimit from './TimeLimit';

class TradingInterval extends Component {
    render() {
        return (
            <div>
                <TimeLimit time={this.props.time.from} style={{float: 'left'}}/>
                <span> - </span>
                <TimeLimit time={this.props.time.to} style={{float: 'right'}}/>
            </div>
        );
    }
}

export default TradingInterval;