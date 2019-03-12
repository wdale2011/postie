import React, { Component } from "react";
import API from "../API";
import { Link } from "react-router-dom";
import "../css/PostList.css";

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [{ title: "title" }],
      page: 1
    };
  }

  componentDidMount = () => {
    API.getAllPosts(this.state.page).then(Response =>
      this.setState({ posts: Response.data })
    );
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      API.getAllPosts(this.state.page).then(Response =>
        this.setState({ posts: Response.data })
      );
    }
  };

  handlePageChange = next => {
    if (next && this.state.page < 10) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    } else if (!next && this.state.page > 1) {
      this.setState(prevState => ({ page: prevState.page - 1 }));
    }
  };

  render() {
    return (
      <div className="post-list container">
        <ul className="list">
          {this.state.posts.map(post => (
            <li key={post.id}>
              <p className="list-item-title">{post.title}</p>
              <Link to={`posts/${post.id}`}>Details</Link>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => this.handlePageChange(false)}>
          &lt; Prev page
        </button>
        <span>{this.state.page}</span>
        <button type="button" onClick={() => this.handlePageChange(true)}>
          Next page &gt;
        </button>
      </div>
    );
  }
}
