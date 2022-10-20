import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);

const Login = () => {
    const [success,setSuccess] = useState(false);
    const handleSubmit = e =>{
        e.preventDefault();
        setSuccess(false);
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then( result =>{
            const user =result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch( error =>{
            console.error('error',error);
        })
    }
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-success">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {success && <p className="text-success">User Login Successfully.</p>}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="text-success">New to this site? Please <Link to='/register'>Register</Link> </p>
      </Form>
    </div>
  );
};

export default Login;
