import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaShoppingCart,
} from "react-icons/fa";

import "./BottomNavbar.css"; // Import custom CSS

const BottomNavbar = () => (
  <Navbar fixed="bottom" variant="dark" className="navbar-custom">
    <Container>
      <Nav className="mx-auto">
        <Nav.Link href="/" className="nav-link-custom">
          <div className="icon-text-container">
            <FaHome size={20} />
            <div>خانه</div>
          </div>
        </Nav.Link>

        <Nav.Link href="/wallet" className="nav-link-custom">
          <div className="icon-text-container">
            <FaUtensils size={20} />
            <div>کیف پول</div>
          </div>
        </Nav.Link>
        <Nav.Link href="/about-us" className="nav-link-custom">
          <div className="icon-text-container">
            <FaInfoCircle size={20} />
            <div>سفارش جاری</div>
          </div>
        </Nav.Link>
        <Nav.Link href="/cart" className="nav-link-custom">
          <div className="icon-text-container">
            <FaShoppingCart size={20} />
            <div>سبد خرید</div>
          </div>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default BottomNavbar;
