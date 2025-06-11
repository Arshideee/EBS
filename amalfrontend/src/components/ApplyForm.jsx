import React from "react";
import "./ApplyForm.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

function ApplyForm() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    username: yup.string().required("enter your name"),

    programme: yup.string().required("select programme"),
    phone: yup.string().required("Phone number is required"),
    password: yup.string().required("enter password"),
    email: yup.string().email("enter a valid email").required("enter your email"),
    state: yup.string().required("select your state"),
    city: yup.string().required("select your city"),
  });
  const url = "https://ebs-3.onrender.com";
  const submitForm = async (value) => {
    // toast.success("Account Signed up");
    console.log(value);
    try{
      const {data} = await axios.post(url + "/api/users/register",value);
      if(!data.success){
       return toast.error(data.message);
      }
      toast.success(data.message);
  
    
    }catch(error){
      toast.error(error.message);
    
    }
  //  toast.error("database not connected")
  };
  return (
    <div>
    <Container>
      <Row className="justify-content-center applyFormm p-3">
        <Col>
          <Formik
            validationSchema={schema}
            onSubmit={submitForm}
            initialValues={{
              username: "",
              email: "",
              programme: "",
              state: "",
              city: "",
              phone: "",
              password: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    controlId="validationFormik01"
                    className="position-relative"
                  >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter your name"
                      value={values.username}
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
                     isInvalid={touched.username && !!errors.username}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.username}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik03"
                    className="position-relative"
                  >
                    <Form.Label>Phone:</Form.Label>

                    <Form.Control
                   
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      isValid={touched.phone && !errors.phone}
                      isInvalid={touched.phone && !!errors.phone}
                    />

                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.phone}
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormikDropdown"
                    className="position-relative"
                  >
                    <Form.Label>Select Progamme:</Form.Label>
                    <Form.Control
                      as="select"
                      name="programme"
                      value={values.programme}
                      onChange={handleChange}
                      isValid={touched.programme && !errors.programme}
                     isInvalid={touched.programme && !!errors.programme}
                    >
                      <option value="" disabled>
                        Select an option...
                      </option>
                      <option value="general_management">
                        BBA in General Management
                      </option>
                      <option value="operations_management">
                        BBA in Operations Management
                      </option>
                      <option value="entrepreneurship">
                        BBA in Entrepreneurship
                      </option>
                      <option value="business_analytics">
                        BBA in Business Analytics
                      </option>
                      <option value="ai_ml">
                        BBA in Artificial Intelligence (AI) and Machine
                        Learning
                      </option>
                      <option value="healthcare_management">
                        BBA in Healthcare Management
                      </option>
                      <option value="hospitality_tourism">
                        BBA in Hospitality and Tourism Management
                      </option>
                      <option value="sports_management">
                        BBA in Sports Management
                      </option>
                      <option value="logistics_supply_chain">
                        BBA in Logistics and Supply Chain Management
                      </option>
                      <option value="entrepreneurship">
                        MBA in Entrepreneurship
                      </option>
                      <option value="business_analytics">
                        MBA in Business Analytics
                      </option>
                      <option value="hr_management">
                        MBA in Human Resource Management
                      </option>
                      <option value="healthcare_management">
                        MBA in Healthcare Management
                      </option>
                      <option value="hospitality_tourism">
                        MBA in Hospitality and Tourism Management
                      </option>
                      <option value="consultancy_services">
                        MBA in Consultancy Services
                      </option>
                    </Form.Control>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.programme}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormikDropdown1"
                    className="position-relative"
                  >
                    <Form.Label>Select State:</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isValid={touched.state && !errors.state}
                      isInvalid={touched.state && !!errors.state}
                    >
                      <option value="" disabled>
                        Select an option...
                      </option>
                      <option value="andhra_pradesh">Andhra Pradesh</option>
                      <option value="arunachal_pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal_pradesh">
                        Himachal Pradesh
                      </option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya_pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil_nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar_pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west_bengal">West Bengal</option>
                    </Form.Control>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.state}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormikDropdown2"
                    className="position-relative"
                  >
                    <Form.Label>Select City:</Form.Label>
                    <Form.Control
                      as="select"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isValid={touched.city && !errors.city}
                             isInvalid={touched.city && !!errors.city}
                    >
                      <option value="" disabled>
                        Select an option...
                      </option>
                      <option value="Calicut">Calicut</option>
                      <option value="Calicut">Manjeri</option>
                      <option value="Calicut">perinthalmanna</option>
                    </Form.Control>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    {/* <Form.Control.Feedback type="invalid" tooltip>
                      {errors.city}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                </Row>

                <Row className="mb-3 d-flex justify-content-between ">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik02"
                    className="position-relative"
                  >
                    <Form.Label>Email:</Form.Label>
                    {/* <div className="position-relative "> */}
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                         isInvalid={touched.email && !!errors.email}
                      />
                      {/* <span className="position-absolute otp-btn ">
                        <Button className="fw-bolder btn-width">
                          Send OTP
                        </Button>
                      </span>
                    </div> */}
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik04"
                    className="position-relative otp-field"
                  >
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && !!errors.password}
                      // inputMode="numeric"
                      // pattern="\d*"
                      // maxLength={6}
                      // aria-describedby="otpFeedback"
                    />
{/* 
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback
                      // id="otpFeedback"
                      type="invalid"
                      tooltip
                    >
                      {errors.password}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                </Row>

                <div className="text-end">
                  <Button type="submit">Apply now</Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default ApplyForm;
