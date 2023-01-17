import React, { useState, useEffect, useRef } from 'react';
import notifications from '../../assets/images/notifications.svg';
import message from '../../assets/images/message.svg';
import friend from '../../assets/images/friend.svg';

function Headermenu(props) {

  const catMenu = useRef(null)
  const [headerMenu, SetheaderMenu] = useState(false);

  const closeOpenMenus = (e) => {
    if (catMenu.current && headerMenu && !catMenu.current.contains(e.target)) {
      SetheaderMenu(false)
    }
  }

  document.addEventListener('mousedown', closeOpenMenus)

  // useEffect(() => {
  // }, [])

  return (
    <div className="headerMenuMain">
      <div onClick={() => SetheaderMenu("Notifications")} className="headerMenu"><span>8</span>
        <i> <img src={notifications} alt="" /> </i></div>
      {headerMenu === 'Notifications' &&
        <div className="headerMenuDetailBox" ref={catMenu}>
          <h1>Notifications</h1>
          <ul>
            <li><a href="#_">Notifications 1</a></li>
            <li><a href="#_">Notifications 2</a></li>
            <li><a href="#_">Notifications 3</a></li>
            <li><a href="#_">Notifications 4</a></li>
            <li><a href="#_">Notifications 5</a></li>
            <li><a href="#_">Notifications 6</a></li>
            <li><a href="#_">Notifications 7</a></li>
            <li><a href="#_">Notifications 8</a></li>
            <li><a href="#_">Notifications 9</a></li>
            <li><a href="#_">Notifications 10</a></li>
            <li><a href="#_">Notifications 11</a></li>
            <li><a href="#_">Notifications 12</a></li>
          </ul>
        </div>
      }
      <div onClick={() => SetheaderMenu("Messages")} className="headerMenu"><span>15</span>
        <i><img src={message} alt="" /></i></div>
      {headerMenu === 'Messages' &&
        <div className="headerMenuDetailBox" ref={catMenu}>
          <h1>Messages</h1>
          <ul>
            <li><a href="#_">Messages 1</a></li>
            <li><a href="#_">Messages 2</a></li>
            <li><a href="#_">Messages 3</a></li>
            <li><a href="#_">Messages 4</a></li>
            <li><a href="#_">Messages 5</a></li>
            <li><a href="#_">Messages 6</a></li>
            <li><a href="#_">Messages 7</a></li>
            <li><a href="#_">Messages 8</a></li>
            <li><a href="#_">Messages 9</a></li>
            <li><a href="#_">Messages 10</a></li>
            <li><a href="#_">Messages 11</a></li>
            <li><a href="#_">Messages 12</a></li>
          </ul>
        </div>
      }
      <div onClick={() => SetheaderMenu("FriendRequest")} className="headerMenu"><span>6</span>
        <i><img src={friend} alt="" /></i></div>
      {headerMenu === 'FriendRequest' &&
        <div className="headerMenuDetailBox" ref={catMenu}>
          <h1>Friend Request</h1>
          <ul>
            <li><a href="#_">Tasks 1</a></li>
            <li><a href="#_">Tasks 2</a></li>
            <li><a href="#_">Tasks 3</a></li>
            <li><a href="#_">Tasks 4</a></li>
            <li><a href="#_">Tasks 5</a></li>
            <li><a href="#_">Tasks 6</a></li>
            <li><a href="#_">Tasks 7</a></li>
            <li><a href="#_">Tasks 8</a></li>
            <li><a href="#_">Tasks 9</a></li>
            <li><a href="#_">Tasks 10</a></li>
            <li><a href="#_">Tasks 11</a></li>
            <li><a href="#_">Tasks 12</a></li>
          </ul>
        </div>
      }
    </div>
  );
}

export default Headermenu;