import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createCheck, fetchChecks, fetchMenuItems, fetchOneCheck, addItem } from '../actions';


class TableShow extends Component {

  componentWillMount() {
    this.filterCheck();
  }

  componentDidMount() {
    // this.filterCheck();
  }

  filterCheck() {
    let checks = this.props.checks;
    console.log(checks);
    let currentCheck = checks.find((check) => {
      return check.tableId === this.props.match.params.id;
    });
    this.lookForActiveCheck(currentCheck);
  }

  lookForActiveCheck(currentCheck) {
    let tableId = this.props.match.params.id;
    if(!currentCheck) {
     this.props.createCheck(tableId).then((response) => {
       console.log(response);
       let checkId = response.payload.data.id;
       this.props.fetchOneCheck(checkId);
     });
    } else {
      console.log(currentCheck);
      let checkId = currentCheck.id;
      this.props.fetchOneCheck(checkId);
    }
  }

  addItem(checkId, itemId) {
    this.props.addItem(checkId, itemId);
  }

  renderCheck() {
    return _.map(this.props.oneCheck.orderedItems, checkItem => {
      return (
        <div key={checkItem.id} className="check-item list-group-item">
          <span>{checkItem.id}</span>
          <div className="text-xs-right">
            <button className="btn btn-danger">Void</button>
          </div>
        </div>
      )
    });
  }

  renderMenu() {
    let check = this.props.oneCheck;
    console.log(check);
    let checkId = this.props.oneCheck.id;
    return _.map(this.props.menu, item => {
      let itemId = item.id;
      return (
        <div 
          key={item.id} 
          className="menu-item"
          onClick={() => this.addItem(checkId, itemId)}>
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
      <div className="row">
        <div className="col-lg-4 col-sm-4 check-container">
          {this.renderCheck()}
        </div>
        <div className="col-lg-8 col-sm-8 menu-container">
          {this.renderMenu()}
        </div>
        <div className="text-xs-right">
            {/* <Link to="/" className="btn btn-secondary">Back</Link> */}
            <Link to="/" className="btn btn-primary">Send</Link>
        </div>
      </div>
    );
  }

}

function mapStateToProps({ tables, checks, menu, oneCheck}, ownProps) {
  return { 
    table: tables[ownProps.match.params.id],
    checks: checks,
    menu: menu,
    oneCheck: oneCheck,
  }
}

export default connect(mapStateToProps, { createCheck, fetchMenuItems, fetchOneCheck, addItem, fetchChecks })(TableShow);