import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

// function handleDelete() {
//   alert("You clicked the delete icon."); // eslint-disable-line no-alert
// }

function handleClick() {
  // alert("You clicked the Chip."); // eslint-disable-line no-alert
  // return props.getNameCallback(props.value);
}

// function DietChip(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       {console.log(props.value)}
//       <Chip
//         label={props.value}
//         // onDelete={props.getNameCallback(props.value)}
//         className={classes.chip}
//         color="primary"
//       />
//     </div>
//   );
// }

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
