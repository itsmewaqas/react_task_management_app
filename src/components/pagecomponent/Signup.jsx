import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Loginheader from '../sharedcomponent/Loginheader';
import Loginfooter from '../sharedcomponent/Loginfooter';
import Contentbox from '../sharedcomponent/Contentbox';
import { Button, Container, Row, Col, Form, Label, Control } from 'react-bootstrap';

import { connect, useSelector, useDispatch } from 'react-redux';
import { userAdd } from '../../redux/Actions/index';

function Signup(props) {

  let navigate = useNavigate();
  const imgRef = useRef();

  const dispatch = useDispatch();
  const userDetails = useSelector(({ userAddReducer }) => userAddReducer);
  console.log('>>',userDetails);

  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [cell, Setcell] = useState("");
  const [gender, Setgender] = useState("");
  const [createddate, Setcreateddate] = useState("");
  const [qualification, Setqualification] = useState([]);
  const [usertype, Setusertype] = useState("");
  const [profilepic, Setprofilepic] = useState("");
  const [status, Setstatus] = useState("");
  const [houseno, Sethouseno] = useState("");
  const [city, Setcity] = useState("");
  const [state, Setstate] = useState("");
  const [country, Setcountry] = useState("");

  // checkbox ctrl start
  const eduList = ["matric", "intermediate", "graduation", "masters"];
  const eduHandle = e => {
    const { checked, value } = e.currentTarget;
    Setqualification(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
  };
  // checkbox ctrl end

  const profilePicHandle = (e) => {
    Setprofilepic(e.target.files[0]);
  }

  const userSignup = () => {
    if (name != '' &&
      email != '' &&
      password != '' &&
      cell != '' &&
      gender != '' &&
      createddate != '' &&
      qualification != '' &&
      usertype != '' &&
      profilepic != '' &&
      status != '' &&
      houseno != '' &&
      city != '' &&
      state != '' &&
      country != '') {
      dispatch(userAdd(
        name,
        email,
        password,
        cell,
        gender,
        createddate,
        qualification,
        usertype,
        profilepic,
        status,
        houseno,
        city,
        state,
        country
      ))
      setTimeout(() => {
        Setname('');
        Setemail('');
        Setpassword('');
        Setcell('');
        Setgender('');
        Setcreateddate('');
        Setqualification(['']);
        Setusertype('');
        Setprofilepic(imgRef.current.value = null);
        Setstatus('');
        Sethouseno('');
        Setcity('');
        Setstate('');
        Setcountry('');
      }, 1000);
    }
    else {
      return false
    }
  }

  useEffect(() => {
  }, [])

  return (
    <div className="loginContainer">
      <header>
        <Loginheader /> 
      </header>
      <main>
        <Container fluid>
          <Row style={{ paddingLeft: '12px' }}>
          <div className='loginLoader'>{userDetails?.loading && <div className="spinner-border"></div>}</div>
            <Col md={6}>
              {/* <h1>Signup</h1> */}
              <Contentbox Title="Singn Up">
                <Row>
                  <Col md={4}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" size="sm" value={name} onChange={(e) => Setname(e.target.value)} />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" size="sm" value={email} onChange={(e) => Setemail(e.target.value)} />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" size="sm" value={password} onChange={(e) => Setpassword(e.target.value)} />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Cell</Form.Label>
                    <Form.Control type="text" size="sm" value={cell} onChange={(e) => Setcell(e.target.value)} />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" size="sm" value={status} onChange={(e) => Setstatus(e.target.value)} />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Created Date</Form.Label>
                    <Form.Control type="date" size="sm" value={createddate} onChange={(e) => Setcreateddate(e.target.value)} />
                  </Col>
                  <Col md={4}>
                    <Form.Label>User Type</Form.Label>
                    <Form.Select size="sm" value={usertype} onChange={(e) => { Setusertype(e.target.value) }}>
                      <option value="">All</option>
                      <option value="Admin">Admin</option>
                      <option value="Employee">Employee</option>
                    </Form.Select>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <Form.Label>Profile Pic</Form.Label>
                      <Col lg={6}>
                        <Form.Control size="sm" type="file" ref={imgRef} onChange={profilePicHandle} />
                      </Col>
                      <Col lg={6}>
                        {profilepic ?
                          <img style={{ width: '100%', height: '60px' }} src={profilepic ? URL.createObjectURL(profilepic) : null} alt='' />
                          : null}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Gender</Form.Label>
                    <br />
                    <Form.Check inline type="radio" label="Male" checked={gender === 'Male'} value="Male" onChange={() => Setgender('Male')} />
                    <Form.Check inline type="radio" label="Female" checked={gender === 'Female'} value="Female" onChange={() => Setgender('Female')} />
                    <Form.Check inline type="radio" label="Other" checked={gender === 'Other'} value="Other" onChange={() => Setgender('Other')} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Qualification</Form.Label>
                    <br />
                    {eduList.map(item => (
                      <div className="chkCtrl2">
                        <Form.Check.Input
                          key={item.toString()}
                          value={item}
                          type="checkbox"
                          checked={qualification.some(val => val === item)}
                          onChange={eduHandle}
                        />  <Form.Label>{item}</Form.Label>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Contentbox>
              <Contentbox Title="User Location">
                <Row>
                  <Col md={6}>
                    <Form.Label>House No</Form.Label>
                    <Form.Control type="text" size="sm" value={houseno} onChange={(e) => Sethouseno(e.target.value)} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Select size="sm" value={city} onChange={(e) => { Setcity(e.target.value) }}>
                      <option value="">All</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Quetta">Quetta</option>
                    </Form.Select>
                  </Col>
                  <Col md={6}>
                    <Form.Label>State</Form.Label>
                    <Form.Select size="sm" value={state} onChange={(e) => { Setstate(e.target.value) }}>
                      <option value="">All</option>
                      <option value="Sindh">Sindh</option>
                      <option value="Balochistan">Balochistan</option>
                      <option value="Punjab">Punjab</option>
                      <option value="KPK">KPK</option>
                    </Form.Select>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Country</Form.Label>
                    <Form.Select size="sm" value={country} onChange={(e) => { Setcountry(e.target.value) }}>
                      <option value="">All</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="India">India</option>
                      <option value="Srilanka">Srilanka</option>
                      <option value="Bangladesh">Bangladesh</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Contentbox>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-20px' }}>
                <Button variant="dark" size="sm" className='mb-2' onClick={() => userSignup()}>Signup</Button>
                
              </div>
            </Col>
          </Row>
        </Container>
      </main >
      <footer>
        <Loginfooter />
      </footer>
    </div >
  );
}

export default Signup;