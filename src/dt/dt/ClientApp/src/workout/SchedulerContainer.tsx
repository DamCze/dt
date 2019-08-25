import "../../node_modules/react-agenda/build/styles.css";
import "../../node_modules/react-datetime/css/react-datetime.css";

import React from "react";
import { ReactAgenda, guid } from "react-agenda";
import { AgendaModal } from "./view/AgendaModal";
import { ControlButtons } from "./view/ControlButtons";
import Colors from "../constants/Colors";
import moment from "moment";

const itemColors = {
  "color-1": Colors.DE_YORK,
  "color-2": Colors.SAFFRON,
  "color-3": Colors.CINNABAR,
  "color-4": Colors.SHAKESPEARE,
  "color-5": Colors.ROUGE
};

interface State {
  items: Array<any>;
  selected: Array<any>;
  showModal: boolean;
  showCtrl: boolean;
  numberOfDays: number;
  startDate: Date;
}

export default class Agenda extends React.Component<{}, State> {
  state = {
    items: [],
    selected: [],
    showModal: false,
    showCtrl: false,
    numberOfDays: 4,
    startDate: new Date()
  };

  handleItemEdit = (item, openModal: boolean) => {
    if (item && openModal === true) {
      this.setState({ selected: [item] });
      this.openModal();
    }
  };

  handleCellSelection = item => {
    if (this.state.selected && this.state.selected[0] === item) {
      this.openModal();
    }
    this.setState({ selected: [item] });
  };

  handleDateRangeChange = (startDate: Date, endDate: Date) => {
    this.setState({ startDate });
  };

  handleRangeSelection = selected => {
    this.setState({ selected: selected, showCtrl: true });
    this.openModal();
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleItemChange = (items, item) => {
    this.setState({ items });
  };

  handleItemSize = (items, item) => {
    this.setState({ items });
  };

  removeEvent = (items, item) => {
    this.setState({ items });
  };

  addNewEvent = (items, newItems) => {
    this.setState({ showModal: false, selected: [], items });
    this.closeModal();
  };

  editEvent = (items, item) => {
    this.setState({ showModal: false, selected: [], items });
    this.closeModal();
  };

  changeView = (days: number) => {
    this.setState({ numberOfDays: days });
  };

  render() {
    return (
      <div style={styles.container}>
        <ControlButtons changeView={this.changeView} />
        <ReactAgenda
          minDate={new Date(moment().year(), moment().month() - 3)}
          maxDate={new Date(moment().year(), moment().month() + 3)}
          startDate={this.state.startDate}
          startAtTime={10}
          cellHeight={20}
          locale="pl"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={4}
          itemColors={itemColors}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection}
          onChangeEvent={this.handleItemChange}
          onChangeDuration={this.handleItemSize}
          onItemEdit={this.handleItemEdit}
          onCellSelect={this.handleCellSelection}
          onItemRemove={this.removeEvent}
          onDateRangeChange={this.handleDateRangeChange}
        />
        {this.state.showModal && (
          <AgendaModal
            clickOutside={this.closeModal}
            items={this.state.items}
            itemColors={itemColors}
            selectedCells={this.state.selected}
            addNewEvent={this.addNewEvent}
            editEvent={this.editEvent}
          />
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Colors.WHITE
  }
};
