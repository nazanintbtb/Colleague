import { useState } from "react";
import Button from "react-bootstrap/Button";

import { Form, Col, InputGroup, Modal } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowModal(true);
      event.preventDefault(); // prevent default behavior
    }

    setValidated(true);
  };

  const handleClose = () => {
    setValidated(false);
    setShowModal(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "25rem", padding: "15px", marginTop: "40px" }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="validationCustom05"
              className="text-end">
              <Form.Label>شماره تلفن همراه</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text>+98</InputGroup.Text>
                <Form.Control
                  type="tel"
                  pattern="^(\+98|0)?9\d{9}$"
                  placeholder="9123456789"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  لطفا یک شماره تلفن همراه معتبر وارد کنید. (مثال:
                  +989123456789)
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Button type="submit">ورود</Button>

          <Modal show={showModal} onHide={handleClose} className="text-end rtl">
            <Modal.Body>
              <Form.Group controlId="formVerificationCode">
                <Form.Label>کد تایید را وارد کنید</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Submit</Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Card>
    </div>
  );
}

export default FormExample;
