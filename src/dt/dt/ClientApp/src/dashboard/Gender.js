import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

class Gender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choose: "mężczyzna"
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
          value={this.state.choose}
          onChange={this.handleChange}
          inputProps={{
            name: "choose",
            id: "choose-simple"
          }}
        >
          <MenuItem value={"mężczyzna"}>Mężczyzna</MenuItem>
          <MenuItem value={"kobieta"}>Kobieta</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Gender);

const styles = theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});