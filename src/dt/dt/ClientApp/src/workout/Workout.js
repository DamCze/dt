import React, { Component } from "react";
import { getId, getUserInfo } from "../api/DtApi";
import SchedulerContainer from "./SchedulerContainer";

class Workout extends Component {
  render() {
    return (
      <div>
        <SchedulerContainer />
      </div>
    );
  }
}

export default Workout;
