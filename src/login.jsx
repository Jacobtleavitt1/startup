import React from 'react';
import {login} from '../services/public/main2'

export function Login() {
  return (
        <div id="login-box">
            <h1>Please Login</h1>
              <div id="login-form">
                  <table>
                    <tbody>
                        <tr>
                            <td id="login-box-label">
                                <label htmlFor="name">@</label>
                            </td>
                            <td id="login-box-input">
                                <input type="text" id="username_input" placeholder="username" required />
                            </td>
                        </tr>
                        <tr>
                            <td id="login-box-label">
                                <label htmlFor="name">🔒</label>
                            </td>
                            <td id="login-box-input">
                                <input type="password" id="password" placeholder="password" required />
                            </td>
                        </tr>
                      </tbody>
                  </table>
                  <button type="submit" onClick={login} >Login</button>
              </div>
        </div>
  );
}