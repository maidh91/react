import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book</div>
    }

    return (
      <div>
        <h3>Book detail</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Page: {this.props.book.pageh}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  book: state.activeBook
});

export default connect(mapStateToProps)(BookDetail);
