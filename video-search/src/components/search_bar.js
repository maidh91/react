import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <div>
        <input onChange={this.onInputChange.bind(this)} />
        Value of the input: {this.state.term}
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
