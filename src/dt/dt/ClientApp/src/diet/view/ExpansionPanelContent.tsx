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
import { saveDiet } from "../services/DietService";
import { FoodArray, FoodRawArray } from "../../model/Interfaces";

const ADD = "add";
const SAVE = "save";

interface Props {
  meal: string;
}

interface State {
  isVisible: boolean;
  food: FoodArray;
}

class ExpansionPanelContent extends React.Component<Props & any, State> {
  _computedFood: FoodRawArray = [];

  state = {
    isVisible: false,
    food: []
  };

  setIsVisible = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  setFood = (value: FoodArray) => {
    this.setState({ food: value });
  };

  setComputedFood = (value: FoodRawArray) => {
    this._computedFood = value;
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
          <DietTableContainer
            setComputedFood={this.setComputedFood}
            food={this.state.food}
          />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" onClick={this.setIsVisible}>
            {t(ADD)}
          </Button>
          <Button
            size="small"
            onClick={() => saveDiet(this._computedFood)}
          >
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

export default withTranslation("translations")(ExpansionPanelContent);
