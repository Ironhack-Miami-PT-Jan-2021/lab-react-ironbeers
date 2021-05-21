import axios from 'axios';
import React from 'react';

export default class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  changeHandler = (e) => {
    // grab the name of the input field
    const name = e.target.name;
    // grab the value from the component
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((_) => {
        this.props.history.push('/beers');
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="tagline"
          placeholder="tagline"
          value={this.state.tagline}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={this.state.description}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="first_brewed"
          placeholder="first_brewed"
          onChange={this.changeHandler}
          value={this.state.first_brewed}
        />
        <input
          type="text"
          name="brewers_tips"
          placeholder="brewers_tips"
          onChange={this.changeHandler}
          value={this.state.brewers_tips}
        />
        <input
          type="number"
          name="attenuation_level"
          placeholder="attenuation_level"
          onChange={this.changeHandler}
          value={this.state.attenuation_level}
        />
        <input
          type="text"
          name="contributed_by"
          placeholder="contributed_by"
          onChange={this.changeHandler}
          value={this.state.contributed_by}
        />
        <button type="submit">Create a new beer</button>
      </form>
    );
  }
}
