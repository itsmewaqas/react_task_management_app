import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Dashheader from '../sharedcomponent/Dashheader';
import Dashfooter from '../sharedcomponent/Dashfooter';
import Dashsidebar from '../sharedcomponent/Dashsidebar';

function Dashboard(props) {

  const [sidebarCtrl, sidebarCtrlSet] = useState("dashboardSidebar");
  const [titleCtrl, titleCtrlSet] = useState("titleShow");

  const sidebarCtrlFunc = () => {
    sidebarCtrlSet(sidebarCtrl == 'dashboardSidebar' ? 'dashboardSidebarCollaps' : 'dashboardSidebar');
    titleCtrlSet(titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow');
  }

  // useEffect(() => {
  // }, [])

  return (
    <div className='dashboardMain'>
      <Dashheader
        sidebarCtrlFunc={sidebarCtrlFunc}
        titleCtrl={titleCtrl} />
      <Dashsidebar
        sidebarCtrl={sidebarCtrl}
        titleCtrl={titleCtrl} />
      <div className='dashContainer'>
        <div className='dashContainerInner'>
          <Outlet />
        </div>
      </div>
      <Dashfooter />
    </div>
  );
}

export default Dashboard;