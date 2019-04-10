import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { lookedUpGifs } = this.props;
    return (
      <div className="gif-list">
        {lookedUpGifs.map((gifID) => {
          return <Gif id={gifID.id} key={gifID.id} changeSelectedGifFunction={this.props.changeSelectedGifFunction} />;
        })}
      </div>
    );
  }
}

export default GifList;
