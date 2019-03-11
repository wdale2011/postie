import React from 'react'
import '../css/UserList.css'

class UserList extends React.Component {
  render() {
    return (
      <div className="user-list">
        <ul className="list">
          {this.props.users.map(user => (
            <li key={user.id}>
              <p className="list-item-title">{user.username}</p>
              Details
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList
