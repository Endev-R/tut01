import React from 'react';
import './dashboard_header.css'; // Import CSS file for styling (if any)

function dashboard_header() {
    return (
        <header className="dashboard-header">
            <div className="logo">
                <h1>Dashboard</h1>
            </div>
            <nav className="nav-links">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
                <a href="/logout">Logout</a>
            </nav>
        </header>
    );
}

export default dashboard_header;