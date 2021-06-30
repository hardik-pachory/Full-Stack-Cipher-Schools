import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Show Comments
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>{props.postID.email}</Modal.Title>
                </Modal.Header>
                <Modal.Body  className="p-5">
                    <div className="row">
                        <div>
                            <h3>{props.postID.name}</h3>
                            <em>{props.postID.body}</em>
                        </div>
                    </div>
                    
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;