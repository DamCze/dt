import React, { Component } from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";
import { getPlotData } from "../../api/ReportApi";
import moment from "moment";
import Colors from "../../constants/Colors";
import { mapForLinearPlot } from "../services/PlotDataService";
import { PlotLinearData } from "../../model/Interfaces";

interface State {
  dataPlot: PlotLinearData;
}

class Plot extends Component<{}, State> {
  state = { dataPlot: [] };

  async componentDidMount() {
    const response = await getPlotData();
    const responseJson = await response.json();
    const _dataPlot = mapForLinearPlot(responseJson);
    this.setState({ dataPlot: _dataPlot });
  }

  _tickFormatter = (date: number) => moment(date).format("YYYY-MM-DD");

  _labelFormatter = (data: number) =>
    moment(data).format("YYYY-MM-DD, h:mm:ss a");

  render() {
    const { dataPlot } = this.state;
    return (
      <div style={styles.container}>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={dataPlot}>
            <XAxis
              dataKey="date"
              domain={["auto", "auto"]}
              name="date"
              tickFormatter={this._tickFormatter}
              type="number"
            />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip labelFormatter={this._labelFormatter} />
            <Legend />
            <Line type="monotone" dataKey="kcal" stroke={Colors.SEANCE} />
            <Line type="monotone" dataKey="fat" stroke={Colors.AQUA} />
            <Line type="monotone" dataKey="protein" stroke={Colors.VERMILION} />
            <Line type="monotone" dataKey="carbo" stroke={Colors.DE_YORK} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: "100",
    backgroundColor: "#fff",
    fontSize: "10px"
  }
};

export default Plot;
