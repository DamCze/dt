import React, { Component } from "react";
import { translate } from "react-i18next";
import { IconButton } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";

class Language extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguage = () => {
    const { i18n } = this.props;
    if (i18n.language == "pl") {
      i18n.changeLanguage("en");
      return;
    }
    i18n.changeLanguage("pl");
  };

  render() {
    return (
      <IconButton
        style={{ color: "white" }}
        onClick={() => this.changeLanguage()}
      >
        <LanguageIcon />
      </IconButton>
    );
  }
}

export default translate("translations")(Language);
