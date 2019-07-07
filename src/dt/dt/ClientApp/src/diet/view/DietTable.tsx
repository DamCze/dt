import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface Props {
  food: any;
  add: (label: string) => void;
  subtract: (label: string) => void;
}

export const DietTable = ({ food = [], add, subtract }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {food.length > 0 ? (
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Add</TableCell>
                <TableCell align="right">Subtract</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {food.map(row => (
                <TableRow key={row.label}>
                  <TableCell component="th" scope="row">
                    {row.label}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                  <TableCell align="right">
                    {<button onClick={() => add(row.label)}>+</button>}
                  </TableCell>
                  <TableCell align="right">
                    {<button onClick={() => subtract(row.label)}>-</button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : null}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    paper: {
      marginTop: theme.spacing(3),
      width: "100%",
      overflowX: "auto",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 650
    }
  })
);
