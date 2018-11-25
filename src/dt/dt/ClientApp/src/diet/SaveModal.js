import React, { Component } from "react";
import Modal from "react-modal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { saveDiet } from "../api/api.diet";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "40%",
    padding: "0",
    overflow: "hidden",
    textAlign: "center"
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
  }
};

const styles = theme => ({
  p: {
    margin: theme.spacing.unit,
    position: "fixed",
    top: "30%",
    left: "43%"
  },
  button: {
    margin: theme.spacing.unit,
    position: "relative",
    top: "60%",
  }
});

class SaveModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen != this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen
      });
      console.log("save modal");
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Modal
        isOpen={this.state.isOpen}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <p className={classes.p}>Are you sure?</p>
        <Button color="primary" className={classes.button} onClick={() => saveDiet(this.props.dataToSave[0])}>
          Save
        </Button>
      </Modal>
    );
  }
}

export default withStyles(styles)(SaveModal);
