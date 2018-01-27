import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCheck, fetchMenuItems, fetchOneCheck } from '../actions';
import axios from 'axios';

const ROOT_URL = 'https://check-api.herokuapp.com';
const AUTH_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3M2I1MzJiLWJlZWItNDExYi1hMTg5LWJjZmJlNWVlYzM5MCIsIm5hbWUiOiJqdW5pb3IgIzgifQ.FOOXhSHXPe3oJ0gs_eCJkZK67N5OEEqrG-IMDxBvZ8w';


class TableShow extends Component {

  componentDidMount() {
    this.filterCheck();
  }

  filterCheck() {
    let checks = this.props.checks;
    let currentCheck = checks.filter((check) => {
      return check.tableId === this.props.match.params.id;
    });
    this.lookForActiveCheck(currentCheck);
  }

  lookForActiveCheck(currentCheck) {
    let tableId = this.props.match.params.id;
    let checkId = currentCheck[0].id;
    if(currentCheck.length < 1) {
     this.props.createCheck(tableId);
    } else {
      console.log('check is here!');
      this.props.fetchOneCheck(checkId);
    }
  }

  // fetchCheck(checkId) {
  //   axios({
  //     url: `${ROOT_URL}/checks/${checkId}`,
  //     method: 'get',
  //     headers: { 'Authorization' : AUTH_KEY }
  //   })
  //   .then((response) => {
  //     this.renderCheck(response);
  //   });
  // }

  renderCheck() {
    return _.map(this.props.oneCheck, checkItem => {
      return (
        <div key={checkItem.id} className="check-item list-group-item">
          <span>{checkItem.id}</span>
        </div>
      )
    });
  }

  // filterCheckItem(checkItem) {
  //   let menu = this.props.menu;
  //   let checkItemId = checkItem.itemId;
  //   let checkItem = menu.filter((item) => {
  //     return item.itemId === checkItemId
  //   });
  //   cosnole.log(checkItem);
  // }


  renderMenu() {
    return _.map(this.props.menu, item => {
      return (
        <div key={item.id} className="menu-item">
          <div className="menu-content">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      // <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4 check-container">
            {this.renderCheck()}
          </div>
          <div className="col-lg-8 col-sm-8 menu-container">
            {this.renderMenu()}
          </div>
        </div>
      // </div>
    );
  }

}

function mapStateToProps({ tables, checks, menu, oneCheck }, ownProps) {
  console.log(oneCheck);
  return { 
    table: tables[ownProps.match.params.id],
    checks: checks,
    menu: menu,
    oneCheck: oneCheck
  }
}

export default connect(mapStateToProps, { createCheck, fetchMenuItems, fetchOneCheck })(TableShow);