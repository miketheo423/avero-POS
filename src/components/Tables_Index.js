import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTables, fetchChecks } from '../actions/index';
import _ from 'lodash';
import axios from 'axios';

class TableIndex extends Component {

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  renderTables() {
    // console.log(this.props.tables);
    // console.log(this.props.checks);
    return _.map(this.props.tables, table => {
      return (
        <Link key={table.id} to={`table/${table.id}`}>
          <li key={table.id} className="list-group-item">
            {table.number}
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderTables()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { 
    tables: state.tables,
    checks: state.checks };
}

export default connect(mapStateToProps, { fetchTables, fetchChecks })(TableIndex);