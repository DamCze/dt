import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import BarChartIcon from "@material-ui/icons/BarChart";
import { PowerSettingsNew } from "@material-ui/icons";
import { keycloak } from "../index.js";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const MainListItems = props => {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/workout" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary={t("workout")} />
        </ListItem>
      </Link>

      <Link to="/diet" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <RestaurantMenuIcon />
          </ListItemIcon>
          <ListItemText primary={t("diet")} />
        </ListItem>
      </Link>
      <Link to="/report" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={t("report")} />
        </ListItem>
      </Link>

      <ListItem button onClick={keycloak.logout}>
        <ListItemIcon>
          <PowerSettingsNew />
        </ListItemIcon>
        <ListItemText primary={t("logout")} />
      </ListItem>
    </div>
  );
};
