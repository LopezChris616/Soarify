import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const VacationsDelete = (props) => {
  const { isDeleting, popupDeleteToggle, deleteVaca } = props;
  return (
    <div>
      <Modal isOpen={isDeleting} toggle={popupDeleteToggle}>
        <ModalHeader toggle={popupDeleteToggle}>Are you sure you want to delete?</ModalHeader>
        <ModalBody>There is no going back after deleting...</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteVaca}>Delete</Button>
          <Button color="secondary" onClick={popupDeleteToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default VacationsDelete;
