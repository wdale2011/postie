import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import Users from "./Users";
import "../css/App.css";
import UserDetails from "./UserDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={PostList} />
            <Route path="/posts/:postId" component={PostDetails} />
            <Users path="/users" exact component={Users} />
            <UserDetails path="/users/:userId" component={UserDetails} />
            <PostDetails />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
