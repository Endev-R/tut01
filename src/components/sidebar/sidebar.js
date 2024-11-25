import React from 'react';
import './sidebar.css'; // Import CSS file for styling (if any)

function sidebar() {
    return (
        <div className='sidebar'>
            {/* <h2>Dashboard</h2> */}
            <a href="#">Overview</a>
            <a href="#">Schedule</a>
            <a href="#">Patients</a>
            <a href="#">notifications</a>
            <a href="#">Payement Info</a>
            <a href="#">Settings</a>
        </div>);
}

export default sidebar;
