import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import {
  Instagram,
  Linkedin,
  Telephone,
  TwitterX,
} from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { GeoAltFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Facebook } from "react-bootstrap-icons";

function Footer() {
  return (
    <div>
      <div className="frst-ftr">
        <div className="pt-5 ftr d-flex social p-2">
          <Container>
            <Row>
              <Col xs={12} md={4} className="footer-icons">
                <div className="text-center pb-2">
                  <h3 className="footer-para mt-0 pt-0">Follow us</h3>

                  <div className="text-center media-icns  align-content-center">
                    <ul>
                      <li>
                        <Link to="#">
                          <Facebook size={40} />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/in/entrepreneurs-business-school-ebs-97507235b/">
                          <Linkedin size={40} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <TwitterX size={40} />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/entrepreneurs_business_school?igsh=b2djcHd3YWN3OWJn&utm_source=qr">
                          <Instagram size={40} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="navigation text-center p-2">
                  <h2>About us</h2>
                  <p>
                    Founded by a team of visionary entrepreneurs and seasoned
                    business leaders, Entrepreneurs’ Business School (EBS) is
                    built on the foundation of real-world wisdom, practical
                    knowledge, and invaluable insights of those who have
                    successfully navigated the challenges of building and
                    scaling businesses from the ground up. The Faculty team of
                    EBS is a unique blend of academic excellence and
                    entrepreneurial passion, .
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="contacts position-relative text-center ">
                  <h2 className="contacts-h2">Contacts</h2>

                  <p className="ps-0">
                    <GeoAltFill className="message" />
                    Karaparamb,Kozhikode Kerala, India
                  </p>
                  <p className="ps-0">
                    <Envelope className="message" />
                    official@ebsedu.com
                  </p>
                  <p className="ps-0">
                    <Telephone className="call" />
                    +91 9946220227
                  </p>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <a
                href="/poster.pdf"
                target="_blank"
                className="text-center text-dark text-decoration-none fw-bold"
              >
                <small>View Document</small>
              </a>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Footer;
