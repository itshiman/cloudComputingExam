import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
