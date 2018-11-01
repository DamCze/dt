import React, { Component } from "react";
import { Accordion, AccordionItem } from "react-sanfona";
import { translate } from "react-i18next";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import "../styles/DietStyles.css";

const styles = {
  button: {
    marginLeft: "90%"
  }
};

class Diet extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="demo-container">
        <Accordion>
          {[
            t("breakfast"),
            t("brunch"),
            "Lunch",
            t("dinner"),
            t("snack"),
            t("supper")
          ].map(item => {
            return (
              <AccordionItem title={item}>
                <div>{t("empty")}</div>
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="Add"
                  style={styles.button}
                >
                  <AddIcon />
                </Button>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  }
}
Diet = withStyles(styles)(Diet);
export default translate("translations")(Diet);
