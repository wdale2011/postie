import React, { Component } from 'react'
import '../css/PostList.css'

export default class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  render() {
    return (
      <div className="post-list container">
        <ul className="list">
          {this.state.posts.map(post => (
            <li key={post.id}>
              <p className="list-item-title">{post.title}</p>
              Details
            </li>
          ))}
        </ul>

        <button type="button">&lt; Prev page</button>
        <button type="button">Next page &gt;</button>
      </div>
    )
  }
}
