import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);  
    }
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;    
    this.props.deletePost(id, () => {
      console.log(123);
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Cat: {post.tags}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id]
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPost,
  deletePost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
