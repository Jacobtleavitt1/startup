import React from 'react';

export function Login() {
  return (
        <div id="login-box">
            <h1>Please Login</h1>
              <div id="login-form">
                  <table>
                      <tr>
                          <td id="login-box-label">
                              <label for="name">@</label>
                          </td>
                          <td id="login-box-input">
                              <input type="text" id="username_input" placeholder="username" required />
                          </td>
                      </tr>
                      <tr>
                          <td id="login-box-label">
                              <label for="name">🔒</label>
                          </td>
                          <td id="login-box-input">
                              <input type="password" id="password" placeholder="password" required />
                          </td>
                      </tr>
                  </table>
                  <button type="submit" onclick="login()">Login</button>
              </div>
        </div>
  );
}