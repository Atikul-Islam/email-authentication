import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import app from "../../Firebase/firebase.init";

const auth = getAuth(app);

const Register = () => {
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = e =>{
    
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.password.value;
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('Please add at least one special character');
            return;
        }
        if(password.length < 6){
            setPasswordError('Password should be at least 6 characters.');
            return;
        }
        
        setPasswordError('');

        console.log(email , password);
        createUserWithEmailAndPassword(auth,email,password)
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch( error =>{
            console.error('error',error);
        })
    }

  return (
    <div className="w-50 mx-auto">
        <h2 className="text-primary">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
