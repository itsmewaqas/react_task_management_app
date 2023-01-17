import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Loginheader from '../sharedcomponent/Loginheader';
import Loginfooter from '../sharedcomponent/Loginfooter';
import { Button, Container, Row, Col, Form, Label, Control } from 'react-bootstrap';

function Forgetpassword(props) {

  let navigate = useNavigate();

  const [currentpassword, Setcurrentpassword] = useState("");
  const [newpassword, Setnewpassword] = useState("");
  const [confirmnewpassword, Setconfirmnewpassword] = useState("");

  const passChange = () => {
    console.log('call change password');
  }

  // useEffect(() => {
  // }, [])

  return (
    <div className="loginContainer">
      <header>
        <Loginheader />
      </header>
      <main>
        <Container fluid>
          <Row style={{paddingLeft:'12px'}}>
            <Col md={4}>
              <h1>Forget Password</h1>
              <Form.Label>Current Password</Form.Label>
              <Form.Control size="sm" type="password" value={currentpassword} onChange={(e) => Setcurrentpassword(e.target.value)} />
              <Form.Label>New Password</Form.Label>
              <Form.Control size="sm" type="password" value={newpassword} onChange={(e) => Setnewpassword(e.target.value)} />
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control size="sm" type="password" value={confirmnewpassword} onChange={(e) => Setconfirmnewpassword(e.target.value)} />
              <Button variant="dark" size="sm" className='mt-2' onClick={() => passChange()}>Update Password</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Loginfooter />
      </footer>
    </div >
  );
}

export default Forgetpassword;