import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
     return (
          <div>
               <h1>Please Login</h1>
               <form >
                    <input type="text" />
                    <br />
                    <input type="text" />
                    <br />
                    <button>Register</button>
                    <br />
                    <Link to="/login">Are you Login</Link>
               </form>

          </div>
     );
};

export default Register;