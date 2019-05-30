import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { translate } from "react-i18next";

const ADD = "add";
const SAVE = "save";

const ExpansionPanelContent = props => {
  const { t } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={styles.heading}>{t(props.meal)}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={styles.details}>
        {/* tutaj tabelka */}
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small">{t(ADD)}</Button>
        <Button size="small" color="primary">
          {t(SAVE)}
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

const styles = {
  heading: {
    fontSize: 50
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  }
};

export default translate("translations")(ExpansionPanelContent);
