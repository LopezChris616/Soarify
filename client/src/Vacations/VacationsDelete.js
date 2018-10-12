import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const VacationsDelete = props => {
    return(
        <div>
            <Modal isOpen={props.isDeleting} toggle={props.popupDeleteToggle}>
            <ModalHeader toggle={props.popupDeleteToggle}>Are you sure you want to delete?</ModalHeader>
            <ModalBody>
                There is no going back after deleting...
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={props.deleteVaca}>Delete</Button>
                <Button color="secondary" onClick={props.popupDeleteToggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}

export default VacationsDelete;