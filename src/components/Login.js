import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;
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
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="text-success">New to this site? Please <Link to='/register'>Register</Link> </p>
      </Form>
    </div>
  );
};

export default Login;
