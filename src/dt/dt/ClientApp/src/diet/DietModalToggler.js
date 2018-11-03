import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class DietModalToggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel>Dodaj</InputLabel>
        <Select
          value={this.state.add}
          onChange={this.handleChange}
          inputProps={{
            name: "add",
            id: "add-simple"
          }}
        >
          <MenuItem value={10}>Szukaj</MenuItem>
          <MenuItem value={20}>Własne</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(DietModalToggler);
