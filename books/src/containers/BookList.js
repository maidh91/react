import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from "../actions/index";

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// anything returned from this fuctions will end up as props
const mapStateToProps = (state) => ({
  books: state.books
});

// anything returned from this fuctions will end up as props
const mapDispatchToProps = (dispatch) => bindActionCreators({
  // whenever selectBook is called, the result is passed to all reducers 
  selectBook 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
