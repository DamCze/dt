import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    maxHeight: "40vh",
    marginTop: theme.spacing.unit * 3,
    overflow: "scroll"
  },
  table: {
    minWidth: 700
  }
});

class DietTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this.arrayScalar = [];
    this.reset = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataToTable != this.props.dataToTable) {
      this.arrayScalar.length = 0;
      for (var i = 0, len = nextProps.dataToTable.length; i < len; i++) {
        this.arrayScalar[i] = {};
        for (var prop in nextProps.dataToTable[i]) {
          this.arrayScalar[i][prop] = nextProps.dataToTable[i][prop];
        }
      }

      this.setState({
        data: this.arrayScalar
      });
    }
  }

  getScalarValue = e => {
    if (e.target.value > 0) {
      let name = e.target.name;

      let indexes = this.state.data
        .map((item, index) => {
          if (item.mealId == name) {
            return index;
          }
        })
        .filter(isFinite);

      this.arrayScalar[indexes].kcal = this.props.dataToTable[indexes].kcal;
      this.arrayScalar[indexes].fat = this.props.dataToTable[indexes].fat;
      this.arrayScalar[indexes].protein = this.props.dataToTable[indexes].protein;
      this.arrayScalar[indexes].carbo = this.props.dataToTable[indexes].carbo;

      this.arrayScalar[indexes].kcal *= e.target.value;
      this.arrayScalar[indexes].fat *= e.target.value;
      this.arrayScalar[indexes].protein *= e.target.value;
      this.arrayScalar[indexes].carbo *= e.target.value;

      this.setState(
        {
          data: this.arrayScalar
        },
        () => {
          this.props.dataToSave(this.state.data);
        }
      );
    }
  };

  render() {
    const { classes } = this.props;
    if (this.state.data) {
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Meal(s)</TableCell>
                <TableCell>How many</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => {
                return (
                  <TableRow key={row.mealId}>
                    <TableCell component="th" scope="row">
                      {row.label}
                    </TableCell>
                    <TableCell>
                      <input
                        name={row.mealId}
                        type="number"
                        onChange={this.getScalarValue}
                      />
                    </TableCell>
                    <TableCell numeric>
                      {Math.round(row.kcal * 100) / 100}
                    </TableCell>
                    <TableCell numeric>
                      {Math.round(row.fat * 100) / 100}
                    </TableCell>
                    <TableCell numeric>
                      {Math.round(row.carbo * 100) / 100}
                    </TableCell>
                    <TableCell numeric>
                      {Math.round(row.protein * 100) / 100}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      );
    } else {
      return <div>Brak</div>;
    }
  }
}

export default withStyles(styles)(DietTable);
