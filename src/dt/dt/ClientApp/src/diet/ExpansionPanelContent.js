import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import DietModal from "./DietModal";
import DietTable from "./DietTable";
import SaveModal from "./SaveModal";

const styles = theme => ({
  button: {
    position: "relative",
    left: "87%",
    bottom: "0"
  },
  button2: {
    position: "relative",
    left: "85%",
    bottom: "0"
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
      isSaveModalVisible: false,
      dataFromExpansion: null
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

  openSaveModal = () => {
    this.setState({
      isSaveModalVisible: true
    })
  }

  closeSaveModal = () => {
    this.setState({
      isSaveModalVisible: false
    })
  }

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
        <SaveModal 
          isOpen={this.state.isSaveModalVisible}
          closeModal={this.closeSaveModal}
        />
        <DietTable dataToTable={this.state.dataFromExpansion} />
        <div className={classes.divider} />
        <Button
          variant="fab"
          color="default"
          aria-label="Add"
          onClick={() => this.openSaveModal()}
          className={classes.button2}
        >
          <DoneIcon />
        </Button>
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
