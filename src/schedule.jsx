import React from 'react';
import { useEffect } from 'react';
import {updateChecks, refresh, clearSchedule, addTask} from '../services/public/schedule2';

export function Schedule() {
  return (
    <div>
      <h1>Schedule</h1>
          <div id="schedule" style={{width: "100vw", height: "397px", margin: "8px", overflow: "scroll", whiteSpace: "nowrap"}}>
          <table className="schedule-day" id="monday">
              <tr>
                  <th id="schedule-icon"></th>
                  <th>
                      Monday
                  </th>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a1c" /></td>
                  <td id="a1">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a2c" /></td>
                  <td id="a2">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a3c" /></td>
                  <td id="a3">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a4c" /></td>
                  <td id="a4">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a5c" /></td>
                  <td id="a5">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a6c" /></td>
                  <td id="a6">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="a7c" /></td>
                  <td id="a7">
                  </td>
              </tr>
          </table>
          <table className="schedule-day" id="tuesday">
            <tr>
              <th id="schedule-icon"></th>
              <th>
                  Tuesday
              </th>
            </tr>
            <tr>
              <td id="schedule-icon"><input type="checkbox" id="b1c" /></td>
              <td id="b1">
              </td>
          </tr>
          <tr>
              <td id="schedule-icon"><input type="checkbox" id="b2c" /></td>
              <td id="b2">
              </td>
          </tr>
          <tr>
              <td id="schedule-icon"><input type="checkbox" id="b3c" /></td>
              <td id="b3">
              </td>
          </tr>
          <tr>
              <td id="schedule-icon"><input type="checkbox" id="b4c" /></td>
              <td id="b4">
              </td>
          </tr>
          <tr>
              <td id="schedule-icon"><input type="checkbox" id="b5c" /></td>
              <td id="b5">
              </td>
          </tr>
          <tr>
              <td id="schedule-icon"><input type="checkbox" id="b6c" /></td>
              <td id="b6">
              </td>
          </tr>
          <tr>
              <td id="schedule-icon"><input type="checkbox" id="b7c" /></td>
              <td id="b7">
              </td>
          </tr>
          </table>
          <table className="schedule-day" id="wednesday">
              <tr>
                  <th id="schedule-icon"></th>
                  <th>
                      Wednesday
                  </th>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c1c" /></td>
                  <td id="c1">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c2c" /></td>
                  <td id="c2">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c3c" /></td>
                  <td id="c3">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c4c" /></td>
                  <td id="c4">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c5c" /></td>
                  <td id="c5">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c6c" /></td>
                  <td id="c6">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="c7c" /></td>
                  <td id="c7">
                  </td>
              </tr>
          </table>
          <table className="schedule-day" id="thursday">
              <tr>
                  <th id="schedule-icon"></th>
                  <th>
                      Thursday
                  </th>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d1c" /></td>
                  <td id="d1">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d2c" /></td>
                  <td id="d2">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d3c" /></td>
                  <td id="d3">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d4c" /></td>
                  <td id="d4">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d5c" /></td>
                  <td id="d5">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d6c" /></td>
                  <td id="d6">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="d7c" /></td>
                  <td id="d7">
                  </td>
              </tr>
          </table>
          <table className="schedule-day" id="friday">
              <tr>
                  <th id="schedule-icon"></th>
                  <th>
                      Friday
                  </th>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e1c" /></td>
                  <td id="e1">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e2c" /></td>
                  <td id="e2">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e3c" /></td>
                  <td id="e3">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e4c" /></td>
                  <td id="e4">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e5c" /></td>
                  <td id="e5">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e6c" /></td>
                  <td id="e6">
                  </td>
              </tr>
              <tr>
                  <td id="schedule-icon"><input type="checkbox" id="e7c" /></td>
                  <td id="e7">
                  </td>
              </tr>
          </table>
          </div>
          <button onClick={updateChecks}>Update Checks</button>
          <span style={{margin: "5px"}}></span>
          <button onClick={clearSchedule}>Clear Schedule</button>
          <span style={{margin: "5px"}}></span>
          <button onClick={refresh}>Refresh Schedule</button>
          <h5 id="service" style={{marginBottom: "0"}}></h5>
          <h5 id="service2" style={{marginTop: "0", marginBottom: "7px"}}></h5>
          <h5 style={{display: "none", margin: "0"}}><a href="schedule.html">Export schedule data</a></h5>

        <h3>Add new task</h3>
        <div>
          <label htmlFor="name">Day</label>
          <select name="day" id="task_day">
              <option value="a">Monday</option>
              <option value="b">Tuesday</option>
              <option value="c">Wednesday</option>
              <option value="d">Thursday</option>
              <option value="e">Friday</option>
          </select>
          <br />
          <label htmlFor="name">Task Description</label>
          <input type="text" id="task_description" placeholder="description" />
          <br />
          <button type="submit" onClick={addTask}>Add Task</button>
        </div>
        <br />
        <br />

        <h3>Messages from boss</h3>
        <ul id="boss_messages">
        </ul>
    </div>
  );
}