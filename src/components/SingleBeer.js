import axios from 'axios';
import React, { Component } from 'react';

export default class SingleBeer extends Component {
  state = {
    theBeer: {},
  };
  async componentDidMount() {
    const beerId = this.props.match.params.beerId;
    const responseFromTheAPi = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    this.setState({
      theBeer: responseFromTheAPi.data,
    });
  }

  render() {
    // const beerId = this.props.match.params.beerId;
    // const beers = this.props.beers;
    // const theBeer = beers.find((beer) => beer._id === beerId);
    // console.log(theBeer);
    // if (!theBeer) return null;
    return (
      <div key={this.state.theBeer.name} className="beer-container">
        <img src={this.state.theBeer.image_url} alt="a beer" height="200px" />
        <div>
          <h2>{this.state.theBeer.name}</h2>
          <h4>{this.state.theBeer.tagline}</h4>
          <h5>{this.state.theBeer.contributed_by}</h5>
        </div>
      </div>
    );
    return null;
  }
}
