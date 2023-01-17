import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Loginheader from '../sharedcomponent/Loginheader';
import Loginfooter from '../sharedcomponent/Loginfooter';
import { Button, Container, Row, Col, Form, Label, Control } from 'react-bootstrap';

import { connect, useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../redux/Actions/index';

function Login(props) {

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const loginDetails = useSelector(({ loginData }) => loginData);

  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [passErr, SetpasswordErr] = useState("");

  function clearSubmission() {
    SetemailErr("");
    SetpasswordErr("");
  }

  function signIn() {
    clearSubmission();
    if (email == undefined || email == "") {
      SetemailErr("email Is required");
    }
    if (password == undefined || password == "") {
      SetpasswordErr("password Is required");
    }
    else {
      if (email != '' && password != '') {
        dispatch(userLogin(
          email,
          password,
        ))
      }
      else {
        alert("please enter valid credential :( ");
      }
    }
  }


  // useEffect(() => {
  // }, []);


  return (
    <div className="loginContainer">
      <header>
        <Loginheader />
      </header>
      <main>
        <Container fluid>
          <Row style={{ paddingLeft: '12px' }}>
            <Col md={4}>
              <h1>Login</h1>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" size="sm" value={email} onChange={(e) => Setemail(e.target.value)} />
              <p className="text-danger">{emailErr}</p>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" size="sm" value={password} onChange={(e) => Setpassword(e.target.value)} />
              <p className="text-danger">{passErr}</p>
              <Button variant="dark" size="sm" className='mt-2' onClick={() => signIn()}>Login</Button>
              <div className='loginLoader'>{loginDetails?.loading && <div className="spinner-border"></div>}</div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Loginfooter />
      </footer>
    </div>
  );
}

export default Login;