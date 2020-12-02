import React, { Component } from 'react';
import Images from './Images/Images';
import './App.css';

class App extends Component {

  state = {
    images: [
      "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
      "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
    ],
    currentImage: 0
  }

  switchImageRightHandler = () => {
    this.setState({currentImage: this.state.currentImage + 1});
    if(this.state.currentImage === this.state.images.length - 1) {
      this.setState({currentImage: 0});
    }
  }

  switchImageLeftHandler = () => {
    this.setState({currentImage: this.state.currentImage - 1});
    if(this.state.currentImage === 0 ) {
      this.setState({currentImage: 2});
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchImageLeftHandler}>Previous</button>
        <button onClick={this.switchImageRightHandler}>Next</button>
        <Images image={this.state.images[this.state.currentImage]} number={this.state.currentImage} />
      </div>
    );
  }
}

export default App;
