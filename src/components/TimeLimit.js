import React, { Component } from 'react';

class TimeLimit extends Component {
    render() {
        function setReadableTime(time) {
            let date = new Date(time);
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let d = date.getDate();
            let mo = date.getMonth()+1;
            let y = date.getFullYear();
            return (d + "-" + mo + "-" + y + " " + h + ":" + m + ":" + s);
        }
        return (
            <span>{setReadableTime(this.props.time)}</span>
        );
    }
}

export default TimeLimit;