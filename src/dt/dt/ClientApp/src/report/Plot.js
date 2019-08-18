import React, { Component } from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import ScatterChart from "recharts/lib/chart/ScatterChart";
import Line from "recharts/lib/cartesian/Line";
import Scatter from "recharts/lib/cartesian/Scatter";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";
import { mock } from "../constants/PlotData";
import { getPlotData } from "../api/api.report";
import moment from "moment";

const data = [
  { name: "Mon", Visits: 2200, Orders: 3400 },
  { name: "Tue", Visits: 1280, Orders: 2398 },
  { name: "Wed", Visits: 5000, Orders: 4300 },
  { name: "Thu", Visits: 4780, Orders: 2908 },
  { name: "Fri", Visits: 5890, Orders: 4800 },
  { name: "Sat", Visits: 4390, Orders: 3800 },
  { name: "Sun", Visits: 4490, Orders: 4300 }
];

class Plot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [0]
    };
  }

  componentDidMount() {

    this.setState({
      data: mock.map(m => {
        return {
          kcal: m.kcal,
          fat: m.fat,
          protein: m.protein,
          carbo: m.carbo,
          date: new Date(m.entityCreation).getTime()
        };
      })
    });

    // getPlotData().then(data => {
    //   this.setState({
    //     data: data.map(m => {
    //       return {
    //         kcal: m.kcal,
    //         fat: m.fat,
    //         protein: m.protein,
    //         carbo: m.carbo,
    //         date: new Date(m.entityCreation).getTime()
    //       };
    //     })
    //   });
    // })

  }

  render() {
    const { data } = this.state;
    return (
      <div
        style={{ marginTop: "100", backgroundColor: "#fff", fontSize: "10px" }}
      >
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={this.state.data}>
            <XAxis
              dataKey="date"
              domain={["auto", "auto"]}
              name="date"
              tickFormatter={date => moment(date).format("YYYY-MM-DD")}
              type="number"
            />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip
              labelFormatter={data =>
                moment(data).format("YYYY-MM-DD, h:mm:ss a")
              }
            />
            <Legend />
            <Line type="monotone" dataKey="kcal" stroke="#9c27b0" />
            <Line type="monotone" dataKey="fat" stroke="#00e5ff" />
            <Line type="monotone" dataKey="protein" stroke="#ff3d00" />
            <Line type="monotone" dataKey="carbo" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Plot;
