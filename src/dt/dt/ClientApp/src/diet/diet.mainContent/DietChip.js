import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

class DietChip extends React.Component {
  handleClick = () => {
    return this.props.getNameCallback(this.props.value);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Chip
          label={this.props.value}
          onDelete={this.handleClick}
          className={classes.chip}
          color="primary"
        />
      </div>
    );
  }
}

export default withStyles(styles)(DietChip);

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  }
});
