import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    const { changeSelectedGifFunction } = this.props;
    if (changeSelectedGifFunction) changeSelectedGifFunction(this.props.id);
  };

  render() {
    const { id } = this.props;
    return (
      <img src={`https://media2.giphy.com/media/${id}/200.gif`} alt={`${id}`} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
