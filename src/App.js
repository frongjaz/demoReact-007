import logo from './assets/OIP.jpg';
import './App.css';
import {Route , Routes } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/sign-up" element = {<Signup/>}></Route>
      <Route path="/sign-in" element = {<Signin/>}></Route>
      <Route path="/profile" element = {<Profile/>}></Route>
    </Routes>
    </>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
