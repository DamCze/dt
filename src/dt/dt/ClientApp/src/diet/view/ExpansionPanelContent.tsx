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
import { translate, WithNamespaces } from "react-i18next";
import { DietModal } from "../../commons/Modal";
import { DietList } from "./DietList";
import { Buttons } from "../../commons/Buttons";

const ADD = "add";
const SAVE = "save";

interface Props {
  meal: string;
}

interface State {
  isVisible: boolean;
}

class ExpansionPanelContent extends React.Component<
  Props & WithNamespaces,
  State
> {
  state = {
    isVisible: false
  };

  setIsVisible = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
    const { t, meal } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={styles.heading}>{t(meal)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={styles.details}>
          <DietModal
            open={this.state.isVisible}
            handleClose={this.setIsVisible}
          >
            <DietList />
            <Buttons handleClose={this.setIsVisible}/>
          </DietModal>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">{t(ADD)}</Button>
          <Button size="small" color="primary" onClick={this.setIsVisible}>
            {t(SAVE)}
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

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
