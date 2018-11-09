import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import BarChartIcon from "@material-ui/icons/BarChart";
import { PowerSettingsNew } from "@material-ui/icons";
import { keycloak } from "../index.js";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { translate } from "react-i18next";

function MainListItems(props) {
  const { t } = props;
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={t("main_page")} />
        </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <ListItemText primary={t("workout")} />
      </ListItem>
      
      <Link to="/diet" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <RestaurantMenuIcon />
          </ListItemIcon>
          <ListItemText primary={t("diet")} />
        </ListItem>
      </Link>
      
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={t("report")} />
      </ListItem>

      {/* <ListItem button onClick={keycloak.logout}> */}
      <ListItem button onClick={console.log("keycloak.logout")}>
        <ListItemIcon>
          <PowerSettingsNew />
        </ListItemIcon >
        <ListItemText primary={t("logout")} />
      </ListItem>
    </div>
  );
}

export default translate("translations")(MainListItems);
