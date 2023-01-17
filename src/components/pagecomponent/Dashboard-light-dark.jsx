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


  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
   //document.body.className = theme;
  }, [theme]);

  // useEffect(() => {
  // }, [])

  return (
    <div className={`dashboardMain ${theme}`}>
      <Dashheader
        sidebarCtrlFunc={sidebarCtrlFunc}
        titleCtrl={titleCtrl} />
      <Dashsidebar
        sidebarCtrl={sidebarCtrl}
        titleCtrl={titleCtrl} />
      <div className='dashContainer'>
        <div className='dashContainerInner'>
          
        <button onClick={toggleTheme}>Toggle Theme</button>
          <Outlet />
        </div>
      </div>
      <Dashfooter />
    </div>
  );
}

export default Dashboard;