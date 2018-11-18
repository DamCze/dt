import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { translate } from "react-i18next";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpansionPanelContent from "./ExpansionPanelContent";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(50),
    flexBasis: "100%",
    height: "10vh",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
});

class Diet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: null,
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes, t } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {t("breakfast")}
            </Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{width: "100%"}}>
              <ExpansionPanelContent />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{t("brunch")}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{width: "100%"}}>
              <ExpansionPanelContent />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Lunch</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{width: "100%"}}>
              <ExpansionPanelContent />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{t("dinner")}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{width: "100%"}}>
              <ExpansionPanelContent />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel5"}
          onChange={this.handleChange("panel5")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{t("snack")}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{width: "100%"}}>
              <ExpansionPanelContent />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel6"}
          onChange={this.handleChange("panel6")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{t("supper")}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{width: "100%"}}>
              <ExpansionPanelContent />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
Diet = withStyles(styles)(Diet);
export default translate("translations")(Diet);
