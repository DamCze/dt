import React, { Component } from "react";
import classNames from "classnames";
import { translate } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles/MainStyles.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainListItems from "./items/listItems";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Diet from "./diet/view/Diet";
import Report from "./report/Report";
import Workout from "./workout/Workout";
import Dashboard from "./dashboard/Dashboard";
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge
} from "@material-ui/core";
import Language from "./dictionary/Language";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, t } = this.props;

    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar
              position="absolute"
              className={classNames(
                classes.appBar,
                this.state.open && classes.appBarShift
              )}
            >
              <Toolbar
                disableGutters={!this.state.open}
                className={classes.toolbar}
              >
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  {t("main_page")}
                </Typography>
                <Language />
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose
                )
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <MainListItems />
              </List>
              <Divider />
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Typography variant="h4" gutterBottom component="h2">
                <Route path="/diet" component={Diet} />
              </Typography>
              <Typography component="div" className={classes.chartContainer} />
              <Typography variant="h4" gutterBottom component="h2">
                <Route path="/report" component={Report} />
                <Route path="/workout" component={Workout} />
                <Route path="/dashboard" component={Dashboard} />
              </Typography>
              <div className={classes.tableContainer} />
            </main>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

Main = withStyles(styles)(Main);
export default translate("translations")(Main);
