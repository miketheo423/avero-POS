import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOneCheck, fetchChecks } from '../actions';

import Header from './Header';

class CheckShow extends Component {

componentWillMount() {
  let checkId = this.props.match.params.id;
  this.props.fetchOneCheck(checkId);
}

renderCheck() {
  return _.map(this.props.oneCheck.orderedItems, checkItem => {
    let itemName = '';
    let price = '';
    let checkItemName = checkItem.itemId;
      switch(checkItemName) {
        case "348e706c-ab3b-4a6e-a391-8de96ac7e0a3":
          itemName = "PULL-APART BREAD";
          price = '$4.5';
          break;
        case "92d26789-a296-4910-b7a9-b08e68d9e44d":
          itemName = "GREEN SALAD";
          price = '$8';
          break;
        case "abae32ec-05e5-4072-ba54-3a46764a5eff":
          itemName = "MORTGAGE LIFTER BEANS";
          price = '$6';
          break;
        case "242b1e7c-c233-4324-8b8c-cbf43723395b":
          itemName = "TOMATO TOAST";
          price = '$5.5';
          break;
        case "35b6c0b0-afdc-4df6-a690-30fbcd4a2a04":
          itemName = "MORGANE’S BEEF CHILI";
          price = '$6';
          break;
        case "3aa7eef8-a37a-4a05-83c5-22e99e531781":
          itemName = "CHICKEN CAESAR";
          price = '$13';
          break;
        case "7fde8abf-0589-4446-9905-9185b4c2b598":
          itemName = "THREE SISTERS SALAD";
          price = '$13';
          break;
        case "cf09ccf2-ece2-4771-81c5-deff1fe08d79":
          itemName = "MARINATED STEAK BOWL";
          price = '$15';
          break;
        case "a34074ea-2949-40f9-94fe-d3404607861b":
          itemName = "OUR BURGER";
          price = '$14';
          break;
        case "4b48707c-619b-42b1-8b8a-3da51feacf95":
          itemName = "HAM & CHEESE PRESS";
          price = '$12.5';
          break;
        case "6b6e59e3-0861-48b1-85c0-778df1126e19":
          itemName = "PATTY MELT";
          price = '$12.5';
          break;
        case "f58948c7-9feb-44ea-b0cc-9013406b9a51":
          itemName = "COOKIES & MILK";
          price = '$5';
          break;
      }
      return (
        <div key={checkItem.id} className="check-item list-group-item">
          <span className="closed">{itemName} / {price}</span>
        </div>
      );
  });
}

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 check-container">
              <h3 className="check-title">Check: {this.props.oneCheck.id}</h3>
              {this.renderCheck()}
              <div className="tax-tip-container">
                <h4 className="tax-tip">Tax: {this.props.oneCheck.tax}</h4>
                <h4 className="tax-tip">Tip: {this.props.oneCheck.tip}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ oneCheck }, ownProps) {
  return { 
    oneCheck: oneCheck,
  }
}

export default connect(mapStateToProps, { fetchChecks, fetchOneCheck })(CheckShow);
