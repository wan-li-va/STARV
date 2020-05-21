import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default class Congrats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: true,
        }
    }
    handleClose = () => {
        this.setState({ modalActive: false });
        this.props.toggleJustCompleted()
    }
    handleShow = () => this.setState({ modalActive: true });

    render() {
        return (
            <div className="Congrats">
                {(this.props.isRunning) ? // won't show modal unless timer is off and fast just completed
                    "" :
                    <div>
                        <Modal show={this.props.fastJustCompleted} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>You successfully STARV-ed!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> <img id="congrats" src={require("../images/congrats.gif")} alt="congrats" /></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                    </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                }
            </div>
        )
    }
}