import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../Firebase/firebase.init";

const auth = getAuth(app);

const Register = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = e =>{
        
        e.preventDefault();
        setSuccess(false);
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;
        const name = form.name.value;
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
            setSuccess(true);
            form.reset();
            verifyEmail();
            updateUserName(name);
        })
        .catch( error =>{
            console.error('error',error);
            setPasswordError(error.message);
        })
    }

    const updateUserName = (name) =>{
        updateProfile(auth.currentUser,{
            displayName: name
        })
        .then( () =>{
            console.log('display name updated')
        })
        .catch(error => console.error(error))
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then( () =>{
            alert('Please check your email and verify.')
        })
    }

  return (
    <div className="w-50 mx-auto">
        <h2 className="text-primary">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        {success && <p className="text-success">User created Successfully.</p>}
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p className="text-success">Already have an account? Please <Link to='/login'>Login</Link> </p>
      </Form>
    </div>
  );
};

export default Register;
