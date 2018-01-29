import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createCheck, fetchChecks, fetchMenuItems, fetchOneCheck, addItem, voidItem } from '../actions';
import Header from './Header';


class TableShow extends Component {

  componentWillMount() {
    this.filterCheck();
  }

  filterCheck() {
    let checks = this.props.checks;
    let currentCheck = checks.find((check) => {
      return check.tableId === this.props.match.params.id;
    });
    this.lookForActiveCheck(currentCheck);
  }

  lookForActiveCheck(currentCheck) {
    let tableId = this.props.match.params.id;
    if(!currentCheck) {
     this.props.createCheck(tableId).then((response) => {
       let checkId = response.payload.data.id;
       this.props.fetchOneCheck(checkId);
     });
    } else {
      let checkId = currentCheck.id;
      this.props.fetchOneCheck(checkId);
    }
  }

  addItem(checkId, itemId) {
    console.log('clicked');
    this.props.addItem(checkId, itemId);
    this.props.fetchOneCheck(checkId);
  }

  voidItem(checkId, itemId) {
    this.props.voidItem(checkId, itemId);
    this.props.fetchOneCheck(checkId);
  }

  renderCheck() {
    return _.map(this.props.oneCheck.orderedItems, checkItem => {
      let itemName = '';
      let price = '';
      let checkItemName = checkItem.itemId;
      let itemId = checkItem.id;
      let checkId = this.props.oneCheck.id;
        switch(checkItemName) {
          case "348e706c-ab3b-4a6e-a391-8de96ac7e0a3":
            itemName = "PULL-APART BREAD";
            price = 4.5;
            break;
          case "92d26789-a296-4910-b7a9-b08e68d9e44d":
            itemName = "GREEN SALAD";
            price = 8;
            break;
          case "abae32ec-05e5-4072-ba54-3a46764a5eff":
            itemName = "MORTGAGE LIFTER BEANS";
            price = 6;
            break;
          case "242b1e7c-c233-4324-8b8c-cbf43723395b":
            itemName = "TOMATO TOAST";
            price = 5.5;
            break;
          case "35b6c0b0-afdc-4df6-a690-30fbcd4a2a04":
            itemName = "MORGANE’S BEEF CHILI";
            price = 6;
            break;
          case "3aa7eef8-a37a-4a05-83c5-22e99e531781":
            itemName = "CHICKEN CAESAR";
            price = 13;
            break;
          case "7fde8abf-0589-4446-9905-9185b4c2b598":
            itemName = "THREE SISTERS SALAD";
            price = 13;
            break;
          case "cf09ccf2-ece2-4771-81c5-deff1fe08d79":
            itemName = "MARINATED STEAK BOWL";
            price = 15;
            break;
          case "a34074ea-2949-40f9-94fe-d3404607861b":
            itemName = "OUR BURGER";
            price = 14;
            break;
          case "4b48707c-619b-42b1-8b8a-3da51feacf95":
            itemName = "HAM & CHEESE PRESS";
            price = 12.5;
            break;
          case "6b6e59e3-0861-48b1-85c0-778df1126e19":
            itemName = "PATTY MELT";
            price = 12.5;
            break;
          case "f58948c7-9feb-44ea-b0cc-9013406b9a51":
            itemName = "COOKIES & MILK";
            price = 5;
            break;
        }
        if(checkItem.voided === false) {
          return (
            <div key={checkItem.id} className="check-item list-group-item">
              <span>{itemName} / {price}</span>
              <div className="text-xs-right">
                <button className="btn btn-danger" onClick={() => this.voidItem(checkId, itemId)}>Void</button>
              </div>
            </div>
          );
        } else {
          return (
            <div key={checkItem.id} className="check-item list-group-item">
              <span className="voided">{itemName} / {price}</span>
            </div>
          );
        }
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
      <div>
        <Header />
        <div className="row">
          <div className="col-lg-4 col-sm-4 check-container">
            {this.renderCheck()}
          </div>
          <div className="col-lg-8 col-sm-8 menu-container">
            {this.renderMenu()}
          </div>
          <div className="text-xs-right">
              <Link to="/" className="btn btn-secondary menu-button">Back</Link>
              <Link to="/" className="btn btn-primary menu-button">Send</Link>
          </div>
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

export default connect(mapStateToProps, { createCheck, fetchMenuItems, fetchOneCheck, addItem, fetchChecks, voidItem })(TableShow);