import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  handleChange = (event) => {
    const { searchFunction } = this.props;
    console.log(event.currentTarget.value);
    searchFunction(event.currentTarget.value);
  };

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
