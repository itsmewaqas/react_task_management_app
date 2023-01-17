import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Contentbox from '../sharedcomponent/Contentbox';
import { Button, Container, Row, Col, Form, Label, Control, Table } from 'react-bootstrap';

function Overview(props) {

  let navigate = useNavigate();

  // const login = () => {
  //   navigate('/Admin');
  // }

  // useEffect(() => {
  // }, [])



  return (
    <div>
      Overview

      <Contentbox Title="User Fetch">
        <p>Name: <span>waqas</span></p>
        <p>Email: <span>m.waqas@gmail.com</span></p>
        <p>Cell: <span>+9203222946642</span></p>
        <p>Address: <span>west</span></p>
        <p>Gender: <span>Male</span></p>
      </Contentbox>

      <Contentbox Title="Users List">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Contentbox>

      <Contentbox Title="Add User">
        <Row>
          <Col md={3}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" size="sm" value="" />
          </Col>
          <Col md={3}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" size="sm" value="" />
          </Col>
          <Col md={3}>
            <Form.Label>Cell</Form.Label>
            <Form.Control type="text" size="sm" value="" />
          </Col>
          <Col md={3}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" size="sm" value="" />
          </Col>
          <Col md={3} className="mt-2">
            <Form.Label>Gender</Form.Label>
            <br />
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              value={''}
              id=""
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value={''}
              id=""
            />
          </Col>
          <Col md={5} className="mt-2">
            <Form.Label>qualification</Form.Label>
            <br />
            <Form.Check
              inline
              label="Matric"
              name="qualification"
              type="checkbox"
              value={''}
              id=""
            />
            <Form.Check
              inline
              label="Inter"
              name="qualification"
              type="checkbox"
              value={''}
              id=""
            />
            <Form.Check
              inline
              label="Graduation"
              name="qualification"
              type="checkbox"
              value={''}
              id=""
            />
            <Form.Check
              inline
              label="Masters"
              name="qualification"
              type="checkbox"
              value={''}
              id=""
            />
          </Col>
          <Col md={2} className="mt-2">
            <Form.Label>Type</Form.Label>
            <Form.Select size="sm" aria-label="Default select example">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={2} className="mt-2">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Status"
            />
          </Col>
          <Col md={12} className="mt-2">
            <Button variant="dark">Add</Button>
          </Col>
        </Row>
      </Contentbox>

    </div>
  );
}

export default Overview;