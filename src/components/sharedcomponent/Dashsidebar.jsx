import React, { useState, useEffect } from 'react';
import { useNavigate, Link, NavLink } from "react-router-dom";

function Dashsidebar(props) {

  let navigate = useNavigate();

  const [selectedMenu, selectedMenuSet] = useState('');


  // useEffect(() => {
  // }, [])

  return (
    <div className={props.sidebarCtrl}>
      <ul className='sidebar'>
        <li><NavLink to="Overview" className={selectedMenu == 'Overview' ? 'active' : ''} onClick={() => selectedMenuSet("Overview")}><i className='Overview'></i><title className={props.titleCtrl}>Overview</title></NavLink> </li>
        <li><NavLink to="Accounts" className={selectedMenu == 'Accounts' ? 'active' : ''} onClick={() => selectedMenuSet("Accounts")}><i className='Accounts'></i><title className={props.titleCtrl}>Accounts</title></NavLink>
          {selectedMenu === 'Accounts' &&
            <ul>
              <li><Link to="Accountsdetails">Accountsdetails</Link> </li>
              <li><Link to="Accountsdetails">Accountsdetails</Link> </li>
              <li><Link to="Accountsdetails">Accountsdetails</Link> </li>
            </ul>
          }
        </li>
        <li><NavLink to="Cards" className={selectedMenu == 'Cards' ? 'active' : ''} onClick={() => selectedMenuSet("Cards")}><i className='Cards'></i><title className={props.titleCtrl}>Cards</title></NavLink> </li>
        <li><NavLink to="Beneficiary" className={selectedMenu == 'Beneficiary' ? 'active' : ''} onClick={() => selectedMenuSet("Beneficiary")}><i className='Beneficiary'></i><title className={props.titleCtrl}>Beneficiary</title></NavLink>
          {selectedMenu === 'Beneficiary' &&
            <ul>
              <li><Link to="Beneficiarydetails">Beneficiarydetails</Link> </li>
              <li><Link to="Beneficiarydetails">Beneficiarydetails</Link> </li>
              <li><Link to="Beneficiarydetails">Beneficiarydetails</Link> </li>
            </ul>
          }
        </li>
        <li><NavLink to="Profile" className={selectedMenu == 'Profile' ? 'active' : ''} onClick={() => selectedMenuSet("Profile")}><i className='Profile'></i><title className={props.titleCtrl}>Profile</title></NavLink> </li>
      </ul>
    </div>
  );
}

export default Dashsidebar;







