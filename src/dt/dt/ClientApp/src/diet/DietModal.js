import React, { Component } from "react";
import Modal from "react-modal";
import DietModalToggler from "./DietModalToggler";
import DietPrepared from "./diet.mainContent/DietPrepared";

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
    overflow: "hidden"
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

const styles = {
  button: {
    position: "fixed",
    // top: "0",
    // left: "0",
    right: "0",
    bottom: "0"
  }
};

class DietModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFromModal: null,
      isDisabled: true,
      isVisible: this.props.isVisible
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isVisible != this.state.isVisible) {
      this.setState({
        isVisible: nextProps.isVisible
      });
    }
  }

  callbackFromDietModal = dataFromChild => {
    this.setState({
      dataFromModal: dataFromChild,
      isDisabled: false
    });

    console.log(dataFromChild);
  };

  saveOnClick = () => {
    //this.setState({true})
    if (!this.state.isDisabled) {
      this.setState(
        {
          isDisabled: true,
          isVisible: false,
        },
        () => {
          this.props.getDataToTable(this.state.dataFromModal);
        }
      );
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.state.isVisible}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <DietModalToggler />
        <button
          style={styles.button}
          disabled={this.state.isDisabled}
          onClick={this.saveOnClick}
        >
          Zapisz
        </button>

        <DietPrepared getMealsCallback={this.callbackFromDietModal} />
      </Modal>
    );
  }
}

export default DietModal;
