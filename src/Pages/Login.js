import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [response, setResponse] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const user = (e) => {
    setUsername(e.target.value);
  };

  const pass = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => {
      res.json().then((res) => {
        console.log(res);
        setResponse(true);
        setCurrentUser(res.user);
      });
    });
  };

  const [employee, setEmployee] = useState();
  const [employeeDetails, setEmployeeDetails] = useState();

  const emp = (e) => {
    setEmployee(e.target.value);
    console.log(employee);
  };
  const getEmployee = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/users/get', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: employee,
      }),
    }).then((res) => {
      res.json().then((res) => {
        console.log(res);
        setEmployeeDetails(res.user);
      });
    });
  };

  console.log(employeeDetails);
  return (
    <div>
      {!response && !currentUser ? (
        <>
          <Link to={'/SignUp'}>
            <button>SignUp</button>
          </Link>
          <div className='form'>
            <form onSubmit={login}>
              <div className='input-container'>
                <label>Username </label>
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
        </>
      ) : (
        <>
          <div>
            <h3>You are now logged in. Your details are: </h3>
            <div> First Name: {currentUser?.fname}</div>
            <div> Last Name: {currentUser?.lname}</div>
            <div> Contact : {currentUser?.contact}</div>
            <div> Date Of Birth: {currentUser?.dob}</div>
            <div> Get Details of other user</div>
            <div className='form'>
              <form onSubmit={getEmployee}>
                <input
                  type='text'
                  onChange={(e) => {
                    emp(e);
                  }}></input>
                <div>
                  <input type='submit' />
                </div>
              </form>
              {employeeDetails?.fname ? (
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Contact</th>

                      <th>Salary</th>
                      <th>Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{employeeDetails?.fname}</td>
                      <td>{employeeDetails?.lname}</td>
                      <td>{employeeDetails?.contact}</td>
                      <td>
                        <input></input>
                      </td>
                      <td>
                        <input></input>
                      </td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
