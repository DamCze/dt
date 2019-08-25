import React from "react";
import moment from "moment";

interface Props {
  changeView: (days: number) => void;
}

export const ControlButtons = (props: Props) => (
  <div className="control-buttons">
    <button className="button-control" onClick={() => props.changeView(7)}>
      {" "}
      {moment.duration(7, "days").humanize()}{" "}
    </button>
    <button className="button-control" onClick={() => props.changeView(4)}>
      {" "}
      {moment.duration(4, "days").humanize()}{" "}
    </button>
    <button className="button-control" onClick={() => props.changeView(3)}>
      {" "}
      {moment.duration(3, "days").humanize()}{" "}
    </button>
    <button className="button-control" onClick={() => props.changeView(1)}>
      {" "}
      {moment.duration(1, "day").humanize()}{" "}
    </button>
  </div>
);
