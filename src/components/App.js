import React, { Component } from 'react'
import Home from './Home'
import PostList from './PostList'
import PostDetails from './PostDetails'
import Users from './Users'
import '../css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Posts</li>
              <li>Users</li>
            </ul>
          </nav>
        </header>
        <Home />
        <PostList />
        <PostDetails />
        <Users />
      </div>
    )
  }
}

export default App
