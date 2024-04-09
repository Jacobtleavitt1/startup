import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login';
import { Schedule } from './schedule';
import { About } from './about';

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>GoalCrush</h1>
          <div id="logo"></div>
          <nav>
            <menu>
              <li><NavLink to="about" id="menu-nav-1">About</NavLink></li>
              <li><NavLink to="login" id="menu-nav-2">Login</NavLink></li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <p id="name">Jacobtleavitt1</p>
          <br />
          <a href="https://github.com/Jacobtleavitt1/startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}