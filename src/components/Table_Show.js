import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCheck, fetchChecks } from '../actions';


class TableShow extends Component {

  componentDidMount() {
    this.renderCheck();
  }

  renderCheck() {
    let checks = this.props.checks;
    console.log(checks);
    let currentCheck = checks.filter((check) => {
      return check.tableId === this.props.match.params.id;
    });
    this.lookForActiveCheck(currentCheck);
  }

  lookForActiveCheck(currentCheck) {
    let tableId = this.props.match.params.id;
    if(currentCheck.length < 1) {
     this.props.createCheck(tableId);
    } else {
      console.log('check is here!');
    }
  }

  render() {
    return (
      <div>
        Table show component
      </div>
    );
  }

}

function mapStateToProps({ tables, checks }, ownProps) {
  // console.log(tables);
  // console.log(checks);
  // console.log(currentCheck);
  return { 
    table: tables[ownProps.match.params.id],
    checks: checks,
  }
}

export default connect(mapStateToProps, { createCheck, fetchChecks })(TableShow);