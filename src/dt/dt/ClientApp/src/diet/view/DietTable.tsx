import React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FoodArray, Food } from "../../model/Interfaces";

interface Props {
  food: FoodArray;
  add: (label: string) => void;
  subtract: (label: string) => void;
}

export const DietTable = ({ food = [], add, subtract }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      {food.length > 0 ? (
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t("meal")}</TableCell>
                <TableCell align="right">{t("carbo")}</TableCell>
                <TableCell align="right">{t("fat")}</TableCell>
                <TableCell align="right">{t("kcal")}</TableCell>
                <TableCell align="right">{t("protein")}</TableCell>
                <TableCell align="right">{t("add")}</TableCell>
                <TableCell align="right">{t("subtract")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {food.map((row: Food) => (
                <TableRow key={row.label}>
                  <TableCell component="th" scope="row">
                    {row.label}
                  </TableCell>
                  <TableCell align="right">{row.carbo}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.kcal}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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
