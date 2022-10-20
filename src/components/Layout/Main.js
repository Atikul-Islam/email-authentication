import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Outlet></Outlet>  
        </div>
    );
};

<nav>
    <Link to ='/login'>Login</Link>
    <Link to ='/register'>Register</Link>
</nav>
export default Main;<Outlet></Outlet>