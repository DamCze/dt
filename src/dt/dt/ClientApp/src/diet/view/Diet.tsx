import React from "react";
import ExpansionPanelContent from "./ExpansionPanelContent";
import meals from "../../constants/Meals";

const Diet = () => (
  <div style={styles.root}>
    <ExpansionPanelContent meal={meals.breakfast} />
    <ExpansionPanelContent meal={meals.brunch} />
    <ExpansionPanelContent meal={meals.lunch} />
    <ExpansionPanelContent meal={meals.dinner} />
    <ExpansionPanelContent meal={meals.snack} />
    <ExpansionPanelContent meal={meals.supper} />
  </div>
);

const styles = {
  root: {
    width: "100%"
  }
};

export default Diet;
