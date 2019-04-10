import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "3oFzma9FGIblOf6Wk0",
      lookedUpGifs: [
        // { id: '7EeyCdPpCwrJhJnxLs' },
        { id: 'SQD2LlZy731O8' }
      ]
    };
  }

  search = (query) => {
    giphy('d3J9eVZupzuEqbNjQbWrQlcmcNEKHmvU').search({
      q: query,
      rating: 'r',
      limit: 50,
    }, (error, result) => {
      this.setState({
        lookedUpGifs: result.data
      });
    });
  };

  changeSelectedGif = (newId) => {
    // debugger;
    this.setState({ selectedGif: newId });
  };

  render() {
    const { selectedGif, lookedUpGifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar className="form-search" searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGif} className="gif" />
          </div>
        </div>
        <div className="right-scene">
          <GifList lookedUpGifs={lookedUpGifs} changeSelectedGifFunction={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
