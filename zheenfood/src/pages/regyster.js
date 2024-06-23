import { useState } from "react";
import Button from "react-bootstrap/Button";

import { Form, Col, InputGroup } from "react-bootstrap";

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
      <Card style={{ width: "50rem", padding: "15px", marginTop: "40px" }}>
        <Card.Header style={{ display: "flex", justifyContent: "center" }}>
          فرم ثبت نام
        </Card.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
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
                  //className="text-end rtl"
                />
                <Form.Control.Feedback type="invalid">
                  لطفا یک شماره تلفن همراه معتبر وارد کنید. (مثال:
                  +989123456789)
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom02"
              className="text-end">
              <Form.Label>نام خانوادگی</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="نام خانوادگی"
                className="text-end rtl"
              />
              <Form.Control.Feedback>بسیار خوب!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="text-end">
              <Form.Label>نام</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="نام"
                className="text-end rtl"
              />
              <Form.Control.Feedback>بسیار خوب!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom05"
              className="text-end">
              <Form.Label>کد پستی</Form.Label>
              <Form.Control
                type="text"
                placeholder="کد پستی"
                required
                className="text-end rtl"
              />
              <Form.Control.Feedback type="invalid">
                لطفا یک کد پستی معتبر وارد کنید.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom04"
              className="text-end">
              <Form.Label>پلاک</Form.Label>
              <Form.Control
                type="number"
                placeholder="پلاک"
                required
                className="text-end rtl"
              />
              <Form.Control.Feedback type="invalid">
                لطفا یک پلاک معتبر وارد کنید.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom03"
              className="text-end">
              <Form.Label>آدرس</Form.Label>
              <Form.Control
                type="text"
                placeholder="آدرس"
                required
                className="text-end rtl"
              />
              <Form.Control.Feedback type="invalid">
                لطفا یک آدرس معتبر وارد کنید.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">ثبت نام</Button>
        </Form>
      </Card>
    </div>
  );
}

export default FormExample;
