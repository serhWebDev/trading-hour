import React, { Component } from "react";

const Panel = props => (
  <div>
    <label>
      <input type="checkbox" name="show" onChange={props.isOpenNow} />
      <span>Open only</span>
    </label>
  </div>
);

export default Panel;
