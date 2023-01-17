import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  NavLink,
  useNavigate,
  Link,
  Router,
  useLocation
} from "react-router-dom";
import { Button, Container, Row, Col, Form, Navbar, Nav, Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import { IMAGE_URL } from '../../redux/constants';
import { userUpdate } from '../../redux/Actions/index';

function Profile(props) {

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const loginDetails = useSelector(({ loginData }) => loginData.loginDetails);

  const data = useSelector((state) => {
    return state
  });


  const [ID, SetID] = useState(null);
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const [cell, Setcell] = useState('');
  const [gender, Setgender] = useState('');
  const [createddate, Setcreateddate] = useState('');
  const [qualification, Setqualification] = useState([]);
  const [usertype, Setusertype] = useState('');
  const [profilepic, Setprofilepic] = useState('');
  const [status, Setstatus] = useState('');
  const [houseno, Sethouseno] = useState('');
  const [city, Setcity] = useState('');
  const [state, Setstate] = useState('');
  const [country, Setcountry] = useState('');

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

  const getProfile = () => {
    SetID(loginDetails.ID);
    Setname(loginDetails.name);
    Setemail(loginDetails.email);
    Setpassword(loginDetails.password);
    Setcell(loginDetails.cell);
    Setgender(loginDetails.gender);
    Setcreateddate(loginDetails.createddate);
    const getQF = loginDetails.qualification.toString().split(',');
    Setqualification(getQF);
    Setusertype(loginDetails.usertype);
    Setprofilepic(loginDetails.profilepic);
    Setstatus(loginDetails.status);
    Sethouseno(loginDetails.houseno);
    Setcity(loginDetails.city);
    Setstate(loginDetails.state);
    Setcountry(loginDetails.country);
  }


  const updateUserInfo = () => {
    if (name != '' &&
      email != '' &&
      cell != '' &&
      gender != '' &&
      createddate != '' &&
      qualification != '' &&
      usertype != '' &&
      status != '' &&
      houseno != '' &&
      city != '' &&
      state != '' &&
      country != '') {
      dispatch(userUpdate(
        ID,
        name,
        email,
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
    }
    else {
    }
  }

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div>
      Profile
      <div className='loaderCtrl'>
        <div>{data.loginData?.loading && <div className="spinner-border"></div>}</div>
      </div>
      {/* <nav>
        <NavLink to="">Email</NavLink>
         <NavLink to="Email">Email</NavLink> this link cant use please comment thin line 
        <NavLink to="Message">Message</NavLink>
        <NavLink to="Changepassword">Changepassword</NavLink>
      </nav>
      <Outlet />
      <br /> */}
      <Container fluid>
        <Row>
          {/* <p>{ID}</p> */}
          <Col lg={12}>
            <Form.Label>Profile</Form.Label>
            <br />
            <img src={IMAGE_URL + profilepic} alt="" />
          </Col>
          <Col lg={4}>
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" value={name} onChange={(e) => Setname(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label>Email</Form.Label>
            <Form.Control size="sm" type="text" value={email} onChange={(e) => Setemail(e.target.value)} />
          </Col>
          {/* <Col lg={4}>
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="password" readOnly disabled value={password} onChange={(e) => Setpassword(e.target.value)} />
          </Col> */}
          <Col lg={4}>
            <Form.Label>Cell</Form.Label>
            <Form.Control size="sm" type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Created Date</Form.Label>
            <Form.Control size="sm" type="date" value={createddate} onChange={(e) => Setcreateddate(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Status</Form.Label>
            <Form.Select size="sm" value={status} onChange={(e) => { Setstatus(e.target.value) }}>
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Deactive">Deactive</option>
              <option value="Block">Block</option>
            </Form.Select>
            </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">User Type</Form.Label>
            <Form.Select size="sm" value={usertype} onChange={(e) => { Setusertype(e.target.value) }}>
              <option value="">All</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </Form.Select>
          </Col>

          <Col lg={4}>
            <Form.Label className="mt-3">Gender</Form.Label>
            <br />
            <Form.Check inline type="radio" label="Male" checked={gender === 'Male'} value="Male" onChange={() => Setgender('Male')} />
            <Form.Check inline type="radio" label="Female" checked={gender === 'Female'} value="Female" onChange={() => Setgender('Female')} />
            <Form.Check inline type="radio" label="Other" checked={gender === 'Other'} value="Other" onChange={() => Setgender('Other')} />
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Qualification</Form.Label>
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
        <Row className='mt-4'>
          <Col lg={12}><h5>Location</h5></Col>
          <Col lg={3}>
            <Form.Label className="mt-3">House No</Form.Label>
            <Form.Control size="sm" type="text" value={houseno} onChange={(e) => Sethouseno(e.target.value)} />
          </Col>
          <Col lg={3}>
            <Form.Label className="mt-3">City</Form.Label>
            <Form.Select size="sm" value={city} onChange={(e) => { Setcity(e.target.value) }}>
              <option value="">All</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Quetta">Quetta</option>
            </Form.Select>
          </Col>
          <Col lg={3}>
            <Form.Label className="mt-3">State</Form.Label>
            <Form.Select size="sm" value={state} onChange={(e) => { Setstate(e.target.value) }}>
              <option value="">All</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Punjab">Punjab</option>
              <option value="KPK">KPK</option>
            </Form.Select>
          </Col>
          <Col lg={3}>
            <Form.Label className="mt-3">Country</Form.Label>
            <Form.Select size="sm" value={country} onChange={(e) => { Setcountry(e.target.value) }}>
              <option value="">All</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="Srilanka">Srilanka</option>
              <option value="Bangladesh">Bangladesh</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
          <button type="button" onClick={() => updateUserInfo()} className="btn btn-dark btn-sm float-right">Update</button>
        </div>
      </Container>
    </div>
  );
}

export default Profile;