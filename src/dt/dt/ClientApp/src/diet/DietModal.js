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
    overflow: "hidden",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
  }
};

class DietModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isVisible}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <DietModalToggler />
        <DietPrepared />
      </Modal>
    );
  }
}

export default DietModal;
