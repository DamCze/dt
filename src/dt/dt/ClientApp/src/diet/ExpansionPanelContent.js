import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DietModal from "./DietModal";
import DietTable from "./DietTable";

const styles = theme => ({
  button: {
    marginLeft: "90%"
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class ExpansionPanelContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      dataFromExpansion: []
    };
  }

  openModal = () => {
    this.setState({
      isVisible: true
    });
  };

  closeModal = () => {
    this.setState({
      isVisible: false
    });
  };

  callbackFromDiet = dataFromChildren => {
    this.setState({
      dataFromExpansion: dataFromChildren
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <DietModal
          isVisible={this.state.isVisible}
          closeModal={this.closeModal}
          getDataToTable={this.callbackFromDiet}
        />
        <DietTable dataToTable={this.state.dataFromExpansion} />
        <div className={classes.divider} />
        <Button
          variant="fab"
          color="default"
          aria-label="Add"
          onClick={() => this.openModal()}
          className={classes.button}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ExpansionPanelContent);
