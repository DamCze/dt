import React from "react";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

interface Props {
  handleClose: () => void;
}

export const Buttons = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div style={styles.container}>
      <Button variant="outlined" color="primary" onClick={props.handleClose}>
        {t("close")}
      </Button>
    </div>
  );
};

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
