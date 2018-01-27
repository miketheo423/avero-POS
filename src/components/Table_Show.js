import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCheck, fetchMenuItems } from '../actions';


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

  renderMenu() {
    return _.map(this.props.menu, item => {
      return (
        <div className="menu-item">
          <div className="menu-content">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </div>
      )
    });
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
      // <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4 check-container">
            This is the check
          </div>
          <div className="col-lg-8 col-sm-8 menu-container">
            {this.renderMenu()}
          </div>
        </div>
      // </div>
    );
  }

}

function mapStateToProps({ tables, checks, menu }, ownProps) {
  // console.log(tables);
  // console.log(checks);
  // console.log(currentCheck);
  console.log(menu);
  return { 
    table: tables[ownProps.match.params.id],
    checks: checks,
    menu: menu
  }
}

export default connect(mapStateToProps, { createCheck, fetchMenuItems })(TableShow);