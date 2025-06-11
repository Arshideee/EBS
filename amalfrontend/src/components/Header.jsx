import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo1.PNG";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const handleScroll = () => {
    document.getElementById("hh")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="nav-bg">
        <Container className="pt-2 pb-2">
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
        
       
            <Nav className="ms-auto f">
              <Nav.Link onClick={handleScroll} className="apply-now-btn" as={Link} to={"#"}>
Apply now
              </Nav.Link>
            
            </Nav>
       
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
