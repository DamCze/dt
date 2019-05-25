import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import DietModal from "./DietModal";
import DietTable from "./DietTable";
import SaveModal from "./SaveModal";

class ExpansionPanelContent extends Component {
  state = {
    isVisible: false,
    isSaveModalVisible: false,
    dataFromExpansion: null,
    dataToSave: null
  };

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
    });
  };

  closeSaveModal = () => {
    this.setState({
      isSaveModalVisible: false
    });
  };

  callbackFromDiet = dataFromChildren => {
    this.setState({
      dataFromExpansion: dataFromChildren
    });
  };

  callbackFromExpansion = dataFromChildren => {
    this.setState({
      dataToSave: dataFromChildren
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <DietModal
          isVisible={this.state.isVisible}
          closeModal={this.closeModal}
          getDataToTable={this.callbackFromDiet}
        />
        <SaveModal
          isOpen={this.state.isSaveModalVisible}
          closeModal={this.closeSaveModal}
          dataToSave={this.state.dataToSave}
        />
        <DietTable
          dataToSave={this.callbackFromExpansion}
          dataToTable={this.state.dataFromExpansion}
        />
        <div className={styles.divider} />
        <Button
          variant="fab"
          color="default"
          aria-label="Add"
          onClick={() => this.openSaveModal()}
          className={styles.button}
        >
          <DoneIcon />
        </Button>
        <Button
          variant="fab"
          color="default"
          aria-label="Add"
          onClick={() => this.openModal()}
          className={styles.button2}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    flex: 1
  },
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

export default withStyles(styles)(ExpansionPanelContent);
