/*
 * @LastEditors: Please set LastEditors
 * @Descripttion: 
 * @version: 
 * @Author: wurong
 * @Date: 2020-06-12 17:15:05
 * @LastEditTime: 2020-06-30 17:36:31
 */
import React from 'react';
import BraftEditor from '@/pages/braftEditor';
import Performance from '@/pages/performance';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">braftEditor</Link>
            </li>
            <li>
              <Link to="/performance">performance</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/performance">
            <Performance />
          </Route>
          <Route path="/">
            <BraftEditor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
