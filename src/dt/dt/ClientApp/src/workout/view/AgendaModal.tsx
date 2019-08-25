import React from "react";
import { ReactAgendaCtrl, Modal } from "react-agenda";

interface Props {
  items: Array<any>;
  itemColors: Object;
  selectedCells: Array<any>;
  addNewEvent: (items: Props["items"], newItems: Props["items"]) => void;
  editEvent: (items: Props["items"], item: any) => void;
  clickOutside: () => void;
}

export const AgendaModal = (props: Props) => (
  <Modal clickOutside={props.clickOutside}>
    <div className="modal-content">
      <ReactAgendaCtrl
        items={props.items}
        itemColors={props.itemColors}
        selectedCells={props.selectedCells}
        Addnew={props.addNewEvent}
        edit={props.editEvent}
      />
    </div>
  </Modal>
);
