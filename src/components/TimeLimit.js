import React, { Component } from "react";

const convertWithZero = v => (v < 10 ? "0" + v : v);

const setReadableTime = time => {
  let date = new Date(time);
  let h = convertWithZero(date.getHours());
  let m = convertWithZero(date.getMinutes());
  let s = convertWithZero(date.getSeconds());
  let d = convertWithZero(date.getDate());
  let mo = convertWithZero(date.getMonth() + 1);
  let y = date.getFullYear();
  return `${d}-${mo}-${y} ${h}:${m}:${s}`;
};

const TimeLimit = props => <span>{setReadableTime(props.time)}</span>;

export default TimeLimit;
