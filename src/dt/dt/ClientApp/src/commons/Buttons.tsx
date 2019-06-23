import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  handleClose: () => void;
}

export const Buttons = (props: Props) => (
  <div style={styles.container}>
    <Button variant="outlined" color="primary" style={styles.button}>
      Primary
    </Button>
    <Button variant="outlined" color="secondary" onClick={props.handleClose}>
      Secondary
    </Button>
  </div>
);

const styles = {
  container: {
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  } as React.CSSProperties,
  button: {
    margin: 5
  }
};
