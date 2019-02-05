import React, { Component } from 'react';

import TradingHoursData from './TradingHoursData';
import StatusTradingHours from "./StatusTradingHours";

class ListOfInstruments extends Component {
    render() {
        return this.props.instruments.map((el,id)=>{
            return (
                <tr key={el.instrumentID}>
                    <td>{el.instrumentID}</td>
                    <td><b>{el.name}</b></td>
                    <td>
                        <TradingHoursData tradingHours={el.tradingHours}
                                          isOpenNow={this.props.isOpenNow} />
                    </td>
                    <td>
                        <StatusTradingHours tradingHours={el.tradingHours}
                                            isOpenNow={this.props.isOpenNow} />
                    </td>
                </tr>
            );
        });
    }
}

export default ListOfInstruments;