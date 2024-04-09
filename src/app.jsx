import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
      <header>
        <h1>GoalCrush</h1>
        <div id="logo"></div>
        <nav>
          <menu>
            <li><a href="logoutabout.html" id="menu-nav-1">About</a></li>
            <li><a href="index.html" id="menu-nav-2">Login</a></li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer>
        <p id="name">Jacobtleavitt1</p>
        <br />
        <a href="https://github.com/Jacobtleavitt1/startup">GitHub</a>
      </footer>
    </div>
  );
}