import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Form,
  Card,
} from "react-bootstrap";

function ProfileComponent() {
  const [orders] = useState([
    { id: 1, date: "2022-02-01", total: "250,000 تومان" },
    { id: 2, date: "2022-03-22", total: "175,000 تومان" },
    { id: 3, date: "2022-04-10", total: "320,000 تومان" },
  ]);
  const [name] = useState("نازنین");
  const [plaque, setplaque] = useState(105);
  const [address, setAddress] = useState("خیابان انقلاب، کوچه سوپر گوشت");
  const [phoneNumber] = useState("09304281122");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePlaqueChange = (event) => {
    setplaque(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Container className="my-5">
      <Row>
        <div className="text-end rtl">
          {isEditing ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                style={{
                  width: "50rem",
                  padding: "15px",
                }}>
                <Form className="text-end rtl">
                  <Form.Group controlId="formBasicName">
                    <Row>
                      <Col md={2}>
                        {" "}
                        <Form.Label>پلاک</Form.Label>
                        <Form.Control
                          type="number"
                          //     placeholder="enter your address"
                          value={plaque}
                          onChange={handlePlaqueChange}
                        />
                      </Col>
                      <Col md={10}>
                        <Form.Label>آدرس</Form.Label>
                        <Form.Control
                          type="text"
                          //     placeholder="enter your address"
                          value={address}
                          onChange={handleAddressChange}
                          className="text-end rtl"
                        />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Button variant="primary" onClick={handleSaveClick}>
                    ذخیره
                  </Button>
                </Form>
              </Card>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card
                  style={{
                    width: "70rem",
                    padding: "15px",
                  }}>
                  <Form className="text-end rtl">
                    <Form.Group controlId="formBasicName">
                      <Row>
                        <Col md={6}>
                          <Form.Label> نام خانوادگی</Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            value={"طباطبایی"}
                            className="text-end rtl"
                            style={{ background: "#D8D8D8" }}
                          />
                          <Form.Label>پلاک</Form.Label>
                          <div className="d-flex">
                            <Button variant="primary" onClick={handleEditClick}>
                              تغییر
                            </Button>
                            <Form.Control
                              type="number"
                              value={plaque}
                              readOnly
                              style={{ background: "#D8D8D8" }}
                              className="text-end rtl"
                            />
                          </div>

                          <Form.Label>تاریخ تولد</Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            value={"1402/10/6"}
                            className="text-end rtl"
                            style={{ background: "#D8D8D8" }}
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label>نام</Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            value={name}
                            className="text-end rtl"
                            style={{ background: "#D8D8D8" }}
                          />
                          <Form.Label>آدرس</Form.Label>
                          <div className="d-flex">
                            <Button variant="primary" onClick={handleEditClick}>
                              تغییر
                            </Button>

                            <Form.Control
                              type="text"
                              value={address}
                              readOnly
                              className="text-end rtl"
                              style={{ background: "#D8D8D8" }}
                            />
                          </div>

                          <Form.Label>شماره تلفن همراه</Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            value={phoneNumber}
                            style={{ background: "#D8D8D8" }}
                            className="text-end rtl"
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </Card>
              </div>
            </>
          )}
        </div>
      </Row>

      <Row className="my-5">
        <Col md={12}>
          <h3>سفارشات اخیر</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>شماره سفارش</th>
                <th>تاریخ</th>
                <th>پرداختی</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileComponent;
