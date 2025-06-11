import React from "react";
import ApplyForm from "../components/ApplyForm";
import "./Home.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { PersonCircle, BoxArrowInRight } from "react-bootstrap-icons";
import ad from "../images/ad.jpg";
import logo2 from "../images/logo22.png";
import LoginForm from "../components/LoginForm";
import HomeCarousel from "../components/HomeCarousel";
import MentorsCarous from "../components/MentorsCarous";
import Programes from "../components/Programes";
import Footer from "../components/Footer";
import imgLogo from '../images/logos/companyLogo1.jpeg'
function Home() {
  return (
    <>
      <div className="hhhh"></div>
      <div>
        <HomeCarousel />
      </div>
      <div>
        <MentorsCarous />
      </div>
      <div>
        <Programes />
      </div>
      <div>
        <img className="w-100" src={imgLogo} alt=""  />
      </div>
      <div className="form-bg pt-3">
        <Container className="p-4 p-md-3 p-lg-5">
          <div className="form-padding " id="hh">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="New Applicant">
                <div className="applyForm ">
                  <ApplyForm />
                </div>
              </Tab>
              <Tab eventKey="profile" title="Already Applied">
                <div className="loginForm ">
                  <Container>
                    <Row>
                      <Col md={5} className="login-1">
                        <div>
                          {/* <div>
                          <img className="w-100 img-border" src={ad} alt="" />
                        </div> */}
                          <div className="text-center  pt-5 ">
                            <div className="logo2 pt-3">
                              <img src={logo2} alt="" />
                            </div>
                          </div>

                          <div className="login-col1 text-center p-2 pt-3 pb-5 fw-bold d-flex justify-content-center align-middle ">
                          Built by entrepreneurs, for entrepreneurs. EBS delivers practical knowledge and proven strategies to help you grow.
                          </div>
                        </div>
                      </Col>
                      <Col md={7} className="login-col2 p-3 align-content-center">
                        <div className="login-col1 text-center fw-bold d-flex justify-content-center align-middle p-3 ">
                          If you are already applied, please log in!
                        </div>
                        <div className="p-2 pt-lg-4 pb-md-5">
                          <div className="loginbox ">
                            <LoginForm />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
