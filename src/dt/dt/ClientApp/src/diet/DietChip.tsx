import React from "react";
import Chip from "@material-ui/core/Chip";

interface Props {
  value: number;
  classes: any;
  getNameCallback: (value: Props["value"]) => any;
}

export class DietChip extends React.Component<Props> {
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
