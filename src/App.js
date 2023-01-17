import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/dependencies.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from './components/pagecomponent/Dashboard';
import Overview from './components/pagecomponent/Overview';
import Accounts from './components/pagecomponent/Accounts';
import Accountsdetails from './components/pagecomponent/Accountsdetails';
import Cards from './components/pagecomponent/Cards';
import Cardsdetails from './components/pagecomponent/Cardsdetails';
import Beneficiary from './components/pagecomponent/Beneficiary';
import Beneficiarydetails from './components/pagecomponent/Beneficiarydetails';
import Profile from './components/pagecomponent/Profile';
import Email from './components/pagecomponent/Email';
import Message from './components/pagecomponent/Message';
import Changepassword from './components/pagecomponent/Changepassword';

import Login from './components/pagecomponent/Login';
import Signup from './components/pagecomponent/Signup';
import Forgetpassword from './components/pagecomponent/Forgetpassword';

import Nomatch from './components/sharedcomponent/Nomatch';
import { connect, useSelector, useDispatch } from 'react-redux';

function App() {

  //const location = useLocation();
  const shouldRedirect = true;

  const loginDetails = useSelector(({ loginData }) => loginData.loginDetails);

  useEffect(() => {
  }, [])

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Routes>
        {loginDetails == null ?
          <React.Fragment>
            <Route exact path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Forgetpassword" element={<Forgetpassword />} />
          </React.Fragment>
          :
          <Route path="/" element={<Dashboard />}>
            <Route index
              element={
                shouldRedirect ? (
                  <Navigate replace to="/Overview" />
                ) : (
                  <Dashboard />
                )
              }
            />
            <Route path="Overview" element={<Overview />} />
            <Route path="Accounts" element={<Accounts />} />
            <Route path="Accountsdetails" element={<Accountsdetails />} />
            <Route path="Cards" element={<Cards />} />
            <Route path="Cardsdetails" element={<Cardsdetails />} />
            <Route path="Beneficiary" element={<Beneficiary />} />
            <Route path="Beneficiarydetails" element={<Beneficiarydetails />} />
            <Route path="Profile" element={<Profile />}>
              {/* <Route index path="Email" element={<Email />} /> */}
              <Route index element={<Email />} />
              <Route path="Message" element={<Message />} />
              <Route path="Changepassword" element={<Changepassword />} />
              {/* <Route path="*" element={<Nomatch />} /> */}
            </Route>
            {/* <Route path="*" element={<Nomatch />} /> */}
          </Route>
        }
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
}

export default App;



// https://react-bootstrap.github.io/