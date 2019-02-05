import React, { Component } from 'react';

class Panel extends Component {
    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" name="show" onChange={this.props.isOpenNow} />
                    <span>Open only</span>
                </label>
            </div>
        );
    }
}

export default Panel;
