import React from "react";
import Modal from "@material-ui/core/Modal";

interface Props {
  open: boolean;
  children: any;
  handleClose: () => void;
}

export const DietModal = (props: Props) => (
  <Modal open={props.open} onBackdropClick={props.handleClose}>
    <div style={styles.modal}>{props.children}</div>
  </Modal>
);

const styles = {
  modal: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: window.innerWidth / 1.6,
    height: window.innerHeight / 1.6,
    backgroundColor: "white",
    outline: "none"
  } as React.CSSProperties
};
