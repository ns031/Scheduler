import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
const SideNav = (props) => {
return (
<div className="sidenav">
   {/* <a href="meetings">Meetings</a>
   <a href>Insurance</a> */}

   <ul className='nav-ul'>
      <li><Link to="/">Calendar</Link></li>
      <li><Link to="clients">Clients</Link></li>
      <li><Link to="meetings">Meetings</Link></li>
      <li>Billing</li>
      <li>Insurance</li>
      <li>Analytics</li>
      <li>Account Activity</li>
      <li>Reminder</li>
      <li>Settings</li>
   </ul>
</div>
 );
};
export default SideNav;
