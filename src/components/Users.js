import React, { Component } from 'react'
import UserList from './UserList'

import '../css/Users.css'

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }
  }

  render() {
    return (
      <div className="users container">
        <h2>Users</h2>
        <div className="columns">
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default Users
