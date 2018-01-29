import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar custom-header">
        <h2 className="navbar-brand">The Greasy Spoon</h2>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Tables</Link>
            </li>
            <li className="nav-item">
              <Link to="/checks" className="nav-link">Checks</Link>
            </li>
          </ul>
      </nav>
    );
  }
}