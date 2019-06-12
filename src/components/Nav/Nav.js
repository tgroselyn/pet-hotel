import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <Link to="/dashboard">
            <h3>Dashboard</h3>
        </Link>
        <Link to="/manage-owners">
            <h3>Manage Owners</h3>
        </Link>
        </>
    )
}

export default Nav;