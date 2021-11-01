import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
     const { signusingGoogle } = useAuth()

     return (
          <div>

               <div>
                    <h1>Please Login</h1>
                    <button onClick={signusingGoogle}>Google Sign in</button>
                    <br />
                    <Link to="/register">New user?</Link>
               </div>
          </div>
     );
};

export default Login;