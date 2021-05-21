import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Beers.css';

export default class Beers extends Component {
  render() {
    const beersToRender = this.props.beers.map((beerData) => (
      <div key={beerData.name} className="beer-container">
        <img src={beerData.image_url} alt="a beer" height="200px" />
        <div>
          <Link to={`/beers/${beerData._id}`}>
            <h2>{beerData.name}</h2>
          </Link>
          <h4>{beerData.tagline}</h4>
          <h5>{beerData.contributed_by}</h5>
        </div>
      </div>
    ));
    return beersToRender;
  }
}
