import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <Link to="/">
        <div className="navbar">🏡</div>
      </Link>
    );
  }
}
