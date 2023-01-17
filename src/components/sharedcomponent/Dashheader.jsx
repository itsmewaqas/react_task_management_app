import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Headermenu from "./Headermenu";
import logo from '../../assets/images/logo.png';
import logoutImg from '../../assets/images/logout.png';
import menu from '../../assets/images/menu.png';
import { connect, useSelector, useDispatch } from 'react-redux';
import { IMAGE_URL } from '../../redux/constants';
import { logout } from '../../redux/Actions/index';

function Dashheader(props) {

  let navigate = useNavigate();

  const [menuCollapse, menuCollapseSet] = useState(false);
  const [logoCtrl, logoCtrlSet] = useState('logoArea');

  const loginDetails = useSelector(({ loginData }) => loginData.loginDetails);
  // console.log('get userinfo', loginDetails)

  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout());
    navigate('/');
    //localStorage.clear();
  }
  const menuCollapsed = () => {
    menuCollapseSet({ menuCollapse: !menuCollapse });
    logoCtrlSet(logoCtrl == 'logoArea' ? 'logoAreaCollapse' : 'logoArea');
    props.sidebarCtrlFunc();
  }

  var getinfo = localStorage.getItem("getSignupinfo");
  var getinfofinal = JSON.parse(getinfo);

  // useEffect(() => {
  // }, [])

  return (
    <div className='dashboardHeader'>
      <div className={logoCtrl}><a className='logo'><img src={logo} alt="" /></a></div>
      <a className="menu" onClick={() => menuCollapsed()}><img src={menu} /></a>
      <a onClick={() => Logout()} className="logout"><img src={logoutImg} alt="" /></a>
      <Headermenu />
      <p className='greetingMessage'>
        Welcome <span>{loginDetails?.name}</span>
        <img src={IMAGE_URL + loginDetails?.profilepic} alt="" /></p>
    </div>
  );
}

export default Dashheader;