import React, { Component } from "react";
import classNames from "classnames";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./DietMainContentStyle";
import { suggestions } from "./SampleData";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Typography,
  NoSsr,
  TextField,
  Paper,
  Chip,
  MenuItem
} from "@material-ui/core/";
import DietChip from "./DietChip";

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class DietPrepared extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      chipArray: []
    };

    this.newArray = [];
  }

  handleChange = option => {
    this.setState(
      {
        selectedOption: option
      },
      () => {
        this.newArray.push(
          <DietChip
            getNameCallback={this.removeItems}
            value={this.state.selectedOption.value}
          />
        );
        console.log(this.newArray)
        this.setState({
          chipArray: this.newArray
        });
      }
    );
  };

  removeItems = dataFromChild => {
    let indexes = this.state.chipArray
      .map((item, index) => {
        if (item.props.value == dataFromChild) {
          return index;
        }
      })
      .filter(isFinite);

      delete this.newArray[indexes];

      this.setState({
        chipArray: this.newArray
      });
  };

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      })
    };

    return (
      <div className={classes.root} style={{ overflow: "hidden" }}>
        <NoSsr>
          <div className={classes.divider} />
          <div className={classes.rootDiv}>
            <Select
              maxMenuHeight={140}
              classes={classes}
              styles={selectStyles}
              options={suggestions}
              components={components}
              value={this.state.selectedOption}
              onChange={this.handleChange}
              placeholder="Search a meal"
            />
          </div>
        </NoSsr>
        <div className={classes.divider} />

        {
          <table>
            <tr>
              {this.state.chipArray.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          </table>
        }
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DietPrepared);
