import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { FaPhone } from "react-icons/fa";
const ContactInfo = () => {
  // const googleMapsApiKey = "YOUR_API_KEY"; // Replace with your own API key
  const companyAddress =
    "آدرس: مرودشت، خیابان انقلاب، کوچه سوپر گوشت، مجموعه غذایی ژین"; // Replace with your company's address
  // const companyLatitude = 37.7749; // Replace with your company's latitude
  // const companyLongitude = -122.4194; // Replace with your company's longitude

  return (
    <Container>
      <Row>
        <Card
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}>
          <Card.Body className="text-end">
            <Card.Title>تماس با ما</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-end">
                <a href="tel:09304281122" style={{ textDecoration: "none" }}>
                  ۰۹۳۰-۴۲۸-۱۱۲۲
                  <FaPhone className="ms-2" />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-end">
                <a href="tel:09304281122" style={{ textDecoration: "none" }}>
                  ۰۹۳۰-۴۲۸-۱۱۲۲
                  <FaPhone className="ms-2" />
                </a>
              </ListGroup.Item>

              <ListGroup.Item> {companyAddress}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110704.12990682991!2d52.72316498410654!3d29.878573358516963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fadfb2c4772163d%3A0x21a96c61e34ff493!2z2YXYrNmF2YjYudmHINuMINi62LDYp9uM24wg2pjbjNmG!5e0!3m2!1sen!2s!4v1687365089021!5m2!1sen!2s"
          title="Google Maps Location"
          //   style={{ border: "0", width: "600px", height: "450px" }}
          width="100%"
          height="300"
          frameborder="0"
          //  scrolling="no"
          marginheight="0"
          marginwidth="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Row>
    </Container>
  );
};

export default ContactInfo;
