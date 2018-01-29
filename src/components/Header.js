import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar custom-header">
        <h2 className="brand">The Greasy Spoon</h2>
      </nav>
    );
  }
}