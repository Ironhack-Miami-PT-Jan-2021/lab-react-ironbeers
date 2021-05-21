import axios from 'axios';
import React, { Component } from 'react';

export default class RandomBeer extends Component {
  state = {
    randomBeer: {},
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((responseFromTheApi) => {
        this.setState({
          randomBeer: responseFromTheApi.data,
        });
      });
  }
  render() {
    return (
      <div key={this.state.randomBeer.name} className="beer-container">
        <img
          src={this.state.randomBeer.image_url}
          alt="a beer"
          height="200px"
        />
        <div>
          <h2>{this.state.randomBeer.name}</h2>
          <h4>{this.state.randomBeer.tagline}</h4>
          <h5>{this.state.randomBeer.contributed_by}</h5>
        </div>
      </div>
    );
  }
}
