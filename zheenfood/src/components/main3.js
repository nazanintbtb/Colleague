import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import i1 from "../image/images (1).jpg";
import i2 from "../image/images (2).jpg";
import i3 from "../image/images (3).jpg";
import i4 from "../image/images (4).jpg";
import "./cardd.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "react-bootstrap";

const MenuItem = ({ name, description, price, imageSrc }) => {
  const [quantity, setQuantity] = React.useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card className={`mb-3 ${quantity > 0 ? "shadow-red" : ""}`}>
      <Card.Body style={{ position: "relative" }}>
        {/* Add the small bottom */}

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "20px",
          }}>
          <Button
            variant="primary"
            size="sm"
            style={{ borderColor: "red" }}
            onClick={handleIncrement}>
            <FaPlus />
          </Button>
        </div>

        {/* End small bottom */}
        {quantity > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "56px",
            }}>
            {quantity}
          </div>
        )}
        {/* Add the small bottom */}
        {quantity > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "78px",
            }}>
            <Button
              variant="primary"
              size="sm"
              style={{ borderColor: "red" }}
              onClick={handleDecrement}>
              <FaMinus />
            </Button>
          </div>
        )}
        {/* End small bottom */}
        <Row>
          <Col xs={8} sm={8} style={{ textAlign: "right" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price.toFixed(2)}</Card.Text>
          </Col>

          <Col xs={4} sm={4} style={{ textAlign: "center" }}>
            <Card.Img
              src={imageSrc}
              style={{ width: "100%", height: "110px" }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Menu = () => (
  <Container>
    <Row>
      <Col>
        <Container className="text-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <hr style={{ borderTop: "5px solid red", width: "50%" }} />
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              <h2>Menu3</h2>
            </div>
            <hr style={{ borderTop: "5px solid red", width: "50%" }} />
          </div>
        </Container>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <MenuItem
          name="Item 1"
          description="Description for Item 1"
          price={10.99}
          imageSrc={i1}
        />
        <MenuItem
          name="Item 2"
          description="Description for Item 2"
          price={12.99}
          imageSrc={i2}
        />
      </Col>
      <Col md={6}>
        <MenuItem
          name="Item 3"
          description="Description for Item 3"
          price={9.99}
          imageSrc={i3}
        />
        <MenuItem
          name="Item 4"
          description="Description for Item 4"
          price={11.99}
          imageSrc={i4}
        />
        <MenuItem
          name="Item 5"
          description="Description for Item 5"
          price={11.99}
          imageSrc={i4}
        />
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <MenuItem
          name="col1"
          description="Description for Item 1"
          price={11.99}
          imageSrc={i4}
        />
        <MenuItem
          name="col1"
          description="Description for Item 2"
          price={11.99}
          imageSrc={i4}
        />
      </Col>
      <Col md={6}>
        <MenuItem
          name="col2"
          description="Description for Item 1"
          price={11.99}
          imageSrc={i4}
        />
        <MenuItem
          name="col2"
          description="Description for Item 2"
          price={11.99}
          imageSrc={i4}
        />
      </Col>
    </Row>
  </Container>
);

export default Menu;
