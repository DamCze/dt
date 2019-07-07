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
import { withTranslation } from "react-i18next";
import { DietModal } from "../../commons/Modal";
import { DietList } from "./DietList";
import { Buttons } from "../../commons/Buttons";
import { DietTableContainer } from "./DietTableContainer";

const ADD = "add";
const SAVE = "save";

interface Props {
  meal: string;
}

interface State {
  isVisible: boolean;
  food: any;
}

class ExpansionPanelContent extends React.Component<Props & any, State> {
  state = {
    isVisible: false,
    food: null
  };

  setIsVisible = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  setFood = food => {
    this.setState({ food: food });
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
            <DietList foodCallback={this.setFood} />
            <Buttons handleClose={this.setIsVisible} />
          </DietModal>
          <DietTableContainer food={this.state.food} />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" onClick={this.setIsVisible}>
            {t(ADD)}
          </Button>
          <Button size="small">{t(SAVE)}</Button>
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

export default withTranslation("translations")(ExpansionPanelContent);
