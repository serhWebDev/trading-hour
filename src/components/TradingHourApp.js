import React, { Component } from 'react';

import Header from "./Header";
import Panel from "./Panel";
import ListOfInstruments from "./ListOfInstruments";

class TradingHourApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenNow: false,
        };
    };

    isOpenNow = async () => {
        if (this.state.isOpenNow === false) {
            this.setState({isOpenNow: true});
        } else {
            this.setState({isOpenNow: false});
        }
    };

    render() {
        return (
            <div>
                <Header />
                <div className={'container'}>
                    <Panel isOpenNow={this.isOpenNow}/>
                    <table className={'highlight'}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            <ListOfInstruments instruments={this.props.instruments}
                                               isOpenNow={this.state.isOpenNow}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TradingHourApp;