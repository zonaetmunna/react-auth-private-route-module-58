import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <div className="nav">
               <Link to="/home">Home</Link>
               <Link to="/shipping">shipping</Link>
               <Link to="/register">Register</Link>
               <Link to="/login">Login</Link>
               <span>{user.displayName}</span>
               {user?.email && < button onClick={logOut}>Log Out</button>}
          </div >
     );
};

export default Header;