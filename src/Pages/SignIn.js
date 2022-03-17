import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [contact, setContact] = useState();
  const [dob, setDob] = useState();

  const user = (e) => {
    setUsername(e.target.value);
  };

  const pass = (e) => {
    setPassword(e.target.value);
  };

  const fname = (e) => {
    setFirstName(e.target.value);
  };
  const lname = (e) => {
    setLastName(e.target.value);
  };
  const cont = (e) => {
    setContact(e.target.value);
  };
  const date = (e) => {
    setDob(e.target.value);
  };

  const sign = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname: firstName,
        password: password,
        lname: lastName,
        contact: contact,
        dob: dob,
        employee_id: username,
      }),
    }).then((res) => {
      res.json().then((res) => {
        console.log(res);
      });
    });
  };
  return (
    <div>
      <Link to={'/'}>
        <button>Login</button>
      </Link>
      <div className='form'>
        <form onSubmit={sign}>
          <div className='input-container'>
            <label>Employee Id </label>
            <input
              type='text'
              name='uname'
              required
              onChange={(e) => {
                user(e);
              }}
            />
          </div>
          <div className='input-container'>
            <label>First Name </label>
            <input
              type='text'
              name='fname'
              required
              onChange={(e) => {
                fname(e);
              }}
            />
          </div>
          <div className='input-container'>
            <label>Last Name </label>
            <input
              type='text'
              name='lname'
              required
              onChange={(e) => {
                lname(e);
              }}
            />
          </div>
          <div className='input-container'>
            <label>Date of Birth </label>
            <input
              type='text'
              name='dob'
              required
              onChange={(e) => {
                date(e);
              }}
            />
          </div>
          <div className='input-container'>
            <label>Contact Number </label>
            <input
              type='text'
              name='cno'
              required
              onChange={(e) => {
                cont(e);
              }}
            />
          </div>
          <div className='input-container'>
            <label>Password </label>
            <input
              type='password'
              name='pass'
              required
              onChange={(e) => {
                pass(e);
              }}
            />
          </div>
          <div className='button-container'>
            <input type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
