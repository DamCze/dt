import React, { Component } from "react";
import { Accordion, AccordionItem } from "react-sanfona";
import { translate } from "react-i18next";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import "../styles/DietStyles.css";
import DietModal from "./DietModal";

const styles = {
  button: {
    marginLeft: "90%",
  }
};

class Diet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  openModal = () => {
    this.setState({
      isVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isVisible: false
    });
  };

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
              <AccordionItem title={item} onClose={() => this.closeModal()}>
                <div>{t("empty")}</div>
                <DietModal isVisible={this.state.isVisible} closeModal={this.closeModal} />
                <Button
                  variant="fab"
                  color="default"
                  aria-label="Add"
                  style={styles.button}
                  onClick={() => this.openModal()}
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
