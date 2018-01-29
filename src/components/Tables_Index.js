import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTables, fetchChecks, fetchMenuItems } from '../actions/index';
import _ from 'lodash';
import Header from './Header';


class TableIndex extends Component {

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
    this.props.fetchMenuItems();
  }

  renderTables() {
    return _.map(this.props.tables, table => {
      return (
        <Link 
          key={table.id} 
          to={`table/${table.id}`}>
          <div key={table.id} className="my-table">
            <div className="my-table-content"><span>Table: {table.number}</span></div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="table-container">
            {this.renderTables()}
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { 
    tables: state.tables,
    checks: state.checks };
}

export default connect(mapStateToProps, { fetchTables, fetchChecks, fetchMenuItems })(TableIndex);