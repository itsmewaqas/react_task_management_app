import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Row, Col, Form, Navbar, Nav, Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import { adduser, userFetch } from '../../redux/Actions/index';
import { IMAGE_URL } from '../../redux/constants';
import { useNavigate, Link } from "react-router-dom";

function Accounts(props) {

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  const imgRef = useRef();
  const [userId, setUserId] = useState(null);
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const [cell, Setcell] = useState('');
  const [gender, Setgender] = useState('');
  const [createddate, Setcreateddate] = useState('');
  const [qualification, Setqualification] = useState([]);
  const [usertype, Setusertype] = useState('');
  const [profilepic, Setprofilepic] = useState('');
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

  const profilepicHandle = (e) => {
    Setprofilepic(e.target.files[0]);
  }

  const userInfo = () => {
    if (name != '' &&
      email != '' &&
      password != '' &&
      cell != '' &&
      gender != '' &&
      createddate != '' &&
      qualification != '' &&
      usertype != '' &&
      profilepic != '' &&
      houseno != '' &&
      city != '' &&
      state != '' &&
      country != '') {
      dispatch(adduser(
        name,
        email,
        password,
        cell,
        gender,
        createddate,
        qualification,
        usertype,
        profilepic,
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
        Sethouseno('');
        Setcity('');
        Setstate('');
        Setcountry('');
        dispatch(userFetch());
      }, 1000);
    }
    else {
      return false
    }
  }

  const editUser = (item) => {
    setUserId(item.ID);
    Setname(item.name);
    Setemail(item.email);
    //Setpassword('');
    Setcell(item.cell);
    Setgender(item.gender);
    Setcreateddate(item.createddate);
    Setqualification(item.qualification);
    Setusertype(item.usertype);
    // Setprofilepic(item.profilepic);
    Sethouseno(item.objLocation.houseno);
    Setcity(item.objLocation.city);
    Setstate(item.objLocation.state);
    Setcountry(item.objLocation.country);
    console.log(item);
  }

  useEffect(() => {
    dispatch(userFetch());
  }, [])



  return (
    <div>
      <h2>User</h2>
      <div className='loaderCtrl'>
        <div>{data.userAdd?.loading && <div className="spinner-border"></div>}</div>
        <div>{data.userFetch?.loading && <div className="spinner-border"></div>}</div>
      </div>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" value={name} onChange={(e) => Setname(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label>Email</Form.Label>
            <Form.Control size="sm" type="text" value={email} onChange={(e) => Setemail(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="password" value={password} onChange={(e) => Setpassword(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Cell</Form.Label>
            <Form.Control size="sm" type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Gender</Form.Label>
            <br />
            <Form.Check inline type="radio" label="Male" checked={gender === 'Male'} value="Male" onChange={() => Setgender('Male')} />
            <Form.Check inline type="radio" label="Female" checked={gender === 'Female'} value="Female" onChange={() => Setgender('Female')} />
            <Form.Check inline type="radio" label="Other" checked={gender === 'Other'} value="Other" onChange={() => Setgender('Other')} />
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Created Date</Form.Label>
            <Form.Control size="sm" type="date" value={createddate} onChange={(e) => Setcreateddate(e.target.value)} />
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
          <Col lg={4}>
            <Form.Label className="mt-3">User Type</Form.Label>
            <Form.Select size="sm" value={usertype} onChange={(e) => { Setusertype(e.target.value) }}>
              <option value="">All</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </Form.Select>
          </Col>
          <Col lg={4}>
            <Form.Label className="mt-3">Profile Pic</Form.Label>
            <Row>
              <Col lg={8}>
                <Form.Control size="sm" type="file" ref={imgRef} onChange={profilepicHandle} />
              </Col>
              <Col lg={4}>
                <img style={{ width: '100px', height: '40px' }} src={profilepic ? URL.createObjectURL(profilepic) : null} alt='' />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col lg={12}><h5>Add Location</h5></Col>
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
          <button type="button" onClick={() => userInfo()} className="btn btn-dark btn-sm float-right">Submit</button>
        </div>
      </Container>
      <Container fluid>
        <div className="table-responsive">
          <Table className='mt-3 table table-sm table-hover'>
            <thead>
              <tr>
                <th>Profile_Pic</th>
                <th>Name</th>
                <th>Email</th>
                <th>Cell</th>
                <th>Gender</th>
                <th>createddate</th>
                <th>Qualification</th>
                <th>User_Type</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.userFetch?.userListFetch == null ?
              <p>data not found</p> :
              <tbody>
                {data.userFetch?.userListFetch.map((item, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>
                        <img style={{ width: '50px', height: '50px' }} src={IMAGE_URL + item.profilepic} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.cell}</td>
                      <td>{item.gender}</td>
                      <td>{item.createddate}</td>
                      <td>{item.qualification.join(', ')}</td>
                      <td>{item.usertype}</td>
                      <td><a href="javascript:;" onClick={() => editUser(item)}>
                        <img src={require('../../assets/images/edit.png')} alt="" /> </a></td>
                    </tr>
                  )
                })
                }
              </tbody>
            }
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Accounts;