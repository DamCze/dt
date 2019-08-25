import React, { Component } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { getPlotData } from "../../api/ReportApi";
import { mapForCirclePlot } from "../services/PlotDataService";
import Colors from "../../constants/Colors";
import { PlotCircleData } from "../../model/Interfaces";

interface State {
  dataPlot: PlotCircleData;
}

class PlotCircle extends Component<{}, State> {
  state = { dataPlot: [] };

  async componentDidMount() {
    const response = await getPlotData();
    const responseJson = await response.json();
    const _dataPlot = mapForCirclePlot(responseJson);
    this.setState({ dataPlot: _dataPlot });
  }

  render() {
    const { dataPlot } = this.state;
    return (
      <div style={styles.container}>
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={dataPlot}
        >
          <RadialBar
            minAngle={15}
            label={styles.radialBar}
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
            wrapperStyle={styles.wrapperStyle}
          />
        </RadialBarChart>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: "100",
    backgroundColor: Colors.WHITE,
    fontSize: "10px"
  },
  radialBar: {
    position: "insideStart",
    fill: Colors.WHITE
  },
  wrapperStyle: {
    top: 0,
    left: 350,
    lineHeight: "24px"
  }
};

export default PlotCircle;
