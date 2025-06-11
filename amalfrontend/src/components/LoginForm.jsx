import React from "react";
import "./LoginForm.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

function LoginForm() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    email: yup.string().email("Enter a valid Email").required("enter your email"),
    password: yup.string().required("enter OTP password"),
  });
   const url = "https://ebs-3.onrender.com";
  const submitForm = async (value) => {
  
    console.log(value);
      try{
          const {data} = await axios.post(url +"/api/users/login",value);
          if(!data.success){
           return toast.error(data.message);
          }
          toast.success(data.message);
        
         
        }catch(error){
          toast.error(error.message);
        }
  };
  return (
    <div>
      {" "}
      <Container>
        <Row className="justify-content-center login p-3">
          <Col>
            <Formik
              validationSchema={schema}
              onSubmit={submitForm}
              initialValues={{
                email: "",
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
                  <Row className="mb-3 d-flex justify-content-between ">
                    <Form.Group
                      as={Col}
                      controlId="validationFormik03"
                      className="position-relative"
                    >
                      <Form.Label>Email:</Form.Label>

                      <Form.Control
                       className="f-cntrl"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={!!errors.email}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  {/* <div>
                    <Button className="fw-bolder btnn-width">Password</Button>
                  </div> */}
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      controlId="validationFormik04"
                      className="position-relative otp-field"
                    >
                      <Form.Label>Password</Form.Label>

                      <Form.Control
                      className="f-cntrl"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                        // inputMode="numeric"
                        // pattern="\d*"
                        // maxLength={6}
                        // aria-describedby="otpFeedback"
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback
                        // id="otpFeedback"
                        type="invalid"
                        tooltip
                      >
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <div className="text-end">
                    <Button type="submit">Log in</Button>
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

export default LoginForm;
