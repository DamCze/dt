import React, { Component } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { mock } from "../constants/PlotData";
import { getPlotData } from "../api/api.report";
import { getPlotData } from "../api/api.report";
import moment from "moment";

// const data = [
//   { name: "18-24", uv: 31.47, pv: 2400, fill: "#8884d8" },
//   { name: "25-29", uv: 26.69, pv: 4567, fill: "#83a6ed" },
//   { name: "30-34", uv: 15.69, pv: 1398, fill: "#8dd1e1" },
//   { name: "35-39", uv: 8.22, pv: 9800, fill: "#82ca9d" },
//   { name: "40-49", uv: 8.63, pv: 3908, fill: "#a4de6c" },
//   { name: "50+", uv: 2.63, pv: 4800, fill: "#d0ed57" },
//   { name: "unknow", uv: 6.67, pv: 4800, fill: "#ffc658" }
// ];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

class PlotCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [0]
    };

    this._data = [
      { name: "kcal", value: 0, fill: "#8884d8" },
      { name: "fat", value: 0, fill: "#83a6ed" },
      { name: "protein", value: 0, fill: "#8dd1e1" },
      { name: "carbo", value: 0, fill: "#82ca9d" }
    ];
  }

  componentDidMount() {
    for(var i = 0; i < mock.length; i++) {
      this._data[0].value += mock[i].kcal;
      this._data[1].value += mock[i].fat;
      this._data[2].value += mock[i].protein;
      this._data[3].value += mock[i].carbo;
    }

    this.setState({
      data: this._data
    })

    // getPlotData()
    //   .then(data => {
    //     for (var i = 0; i < data.length; i++) {
    //       this._data[0].value += data[i].kcal;
    //       this._data[1].value += data[i].fat;
    //       this._data[2].value += data[i].protein;
    //       this._data[3].value += data[i].carbo;
    //     }
    //   })
    //   .then(() => {
    //     this.setState({ data: this._data });
    //   });
  }

  render() {
    const { data } = this.state;
    return (
      <div
        style={{ marginTop: "100", backgroundColor: "#fff", fontSize: "10px" }}
      >
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise={true}
            dataKey="value"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>
    );
  }
}

export default PlotCircle;
