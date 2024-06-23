import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { ImHome } from "react-icons/im";
// import { FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaList } from "react-icons/fa";

function Header() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{ top: "0" }}>
      <Container>
        <Navbar.Brand href="/">
          <div
            style={{
              display: "inline-block",
              borderRadius: "50%",
              border: "2px solid red",
              padding: "5px",
            }}>
            <img
              src="/logo.png"
              alt="Logo"
              width={64}
              height={64}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="me-3" style={{ border: "none" }}>
              خانه
              <ImHome className="ms-2" />
            </Nav.Link>
            <NavDropdown
              title="دسته بندی‌ها"
              id="categories-dropdown"
              className="me-3">
              <NavDropdown.Item href="/Register">ثبت نام</NavDropdown.Item>
              <NavDropdown.Item href="/Login">ورود</NavDropdown.Item>
              <NavDropdown.Item href="/Profile">پروفایل</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category">
                همه دسته‌بندی‌ها
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/call" className="me-3" style={{ border: "none" }}>
              تماس با ما
              <FaPhone className="ms-2" />
            </Nav.Link>

            <Nav.Link
              href="/cart"
              className="me-3"
              style={{ border: "none" }}>
              سبد خرید <FaList className="ms-2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
