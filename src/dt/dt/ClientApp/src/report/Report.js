import React, { Component } from "react";
import Plot from "./Plot";
import PlotCircle from "./PlotCircle";

class Report extends Component {
  render() {
    return (
      <div>
        <Plot />
        <PlotCircle />
      </div>
    );
  }
}

export default Report;
