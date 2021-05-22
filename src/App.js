import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// components imports
import Home from './components/Home';
import NavBar from './components/NavBar';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';

import './App.css';

class App extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseApi) => {
        this.setState({
          beers: responseApi.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleBeersUpdate = (beers) => {
    this.setState({
      beers,
    });
  };

  render() {
    console.log(window);
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/beers"
            render={(props) => (
              <Beers
                {...props}
                beers={this.state.beers}
                handleBeersUpdate={this.handleBeersUpdate}
              />
            )}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={(props) => (
              <SingleBeer {...props} beers={this.state.beers} />
            )}
          />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/" component={Home} />
          <Route path="/" render={() => <div>404 Error</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
