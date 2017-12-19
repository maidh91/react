import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <div className="search-bar">
        <input onChange={ event => this.onInputChange(event.target.value).bind(this) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
