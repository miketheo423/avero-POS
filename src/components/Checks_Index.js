import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchChecks } from '../actions/index';
import _ from 'lodash';

class CheckIndex extends Component {

  componentDidMount() {
    this.props.fetchChecks();
  }

  renderChecks() {
    return _.map(this.props.checks, check => {
      return (
        <Link key={check.id} to={`table/${check.tableId}`}>
          <li key={check.id} className="list-group-item">
            {check.id}
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderChecks()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { checks: state.checks };
}

export default connect(mapStateToProps, { fetchChecks })(CheckIndex);