import { useState } from "react";
import Button from "react-bootstrap/Button";

import { Form, Col } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "25rem", padding: "15px", marginTop: "40px" }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom04"
              className="text-end">
              <Form.Label>مبلغ(ریال)</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                className="text-end rtl"
              />
              <Form.Control.Feedback type="invalid">
                لطفا یک مبلغ معتبر وارد کنید.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom04"
              className="text-end">
              <Form.Label>درگاه پرداخت</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                className="text-end rtl"
              />
              <Form.Control.Feedback type="invalid">
                لطفا درگاه پرداخت مورد نظر را انتخاب کنید.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">پرداخت</Button>
        </Form>
      </Card>
    </div>
  );
}

export default FormExample;
