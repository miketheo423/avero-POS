import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchChecks } from '../actions/index';
import _ from 'lodash';
import Header from './Header';

class CheckIndex extends Component {

  filterOpenChecks() {
    let tableName = '';
    let checks = this.props.checks;
    let openChecks = checks.filter((check) => {
      return check.closed === false;
    });
    if (openChecks) {
      return openChecks.map((check) => {
        let tableId = check.tableId;
        switch(tableId) {
          case "2644ece3-83dd-4deb-ae02-54f4df083e16":
            tableName = "Table: 1";
            break;
          case "c482731d-19a4-4d1f-90ab-e4dc4ac7d28d":
            tableName = "Table: 2";
            break;
          case "51f719e1-830e-40bb-9c1a-493ccc13cbc0":
            tableName = "Table: 3";
            break;
          case "56fe84ff-0655-4972-b2b0-b097e0a26ca1":
            tableName = "Table: 4";
            break;
          case "f5a3d871-1548-4be5-9f5a-e9a6e2011187":
            tableName = "Table: 5";
            break;
          case "cb336b2a-a16f-4734-8e62-f165d5a2ac03":
            tableName = "Table: 6";
            break;
          case "5d6e6290-a0bb-4aa9-ba3d-9071e5a65a93":
            tableName = "Table: 7";
            break;
          case "b0672e44-b959-4f09-ad7e-6f53a386d815":
            tableName = "Table: 8";
            break;
          case "4cf15df2-c1bf-435f-8e8b-ad6aba48937c":
            tableName = "Table: 9";
            break;
          case "31ccc746-4ade-43ea-add1-3dba513feb85":
            tableName = "Table: 10";
            break;
        }
        return (
          <Link key={check.id} to={`table/${check.tableId}`}>
            <li key={check.id} className="list-group-item">
              <p>{check.id} / {tableName}</p> 
            </li>
          </Link>
        );
      });
    } else {
      return null;
    }
  }

  filterClosedChecks() {
    let tableName = '';
    let checks = this.props.checks;
    let closedChecks = checks.filter((check) => {
      return check.closed === true;
    });
    if (closedChecks.length > 0) {
      return closedChecks.map((check) => {
        let tableId = check.tableId;
        switch(tableId) {
          case "2644ece3-83dd-4deb-ae02-54f4df083e16":
            tableName = "Table: 1";
            break;
          case "c482731d-19a4-4d1f-90ab-e4dc4ac7d28d":
            tableName = "Table: 2";
            break;
          case "51f719e1-830e-40bb-9c1a-493ccc13cbc0":
            tableName = "Table: 3";
            break;
          case "56fe84ff-0655-4972-b2b0-b097e0a26ca1":
            tableName = "Table: 4";
            break;
          case "f5a3d871-1548-4be5-9f5a-e9a6e2011187":
            tableName = "Table: 5";
            break;
          case "cb336b2a-a16f-4734-8e62-f165d5a2ac03":
            tableName = "Table: 6";
            break;
          case "5d6e6290-a0bb-4aa9-ba3d-9071e5a65a93":
            tableName = "Table: 7";
            break;
          case "b0672e44-b959-4f09-ad7e-6f53a386d815":
            tableName = "Table: 8";
            break;
          case "4cf15df2-c1bf-435f-8e8b-ad6aba48937c":
            tableName = "Table: 9";
            break;
          case "31ccc746-4ade-43ea-add1-3dba513feb85":
            tableName = "Table: 10";
            break;
        }
        return (
          <Link key={check.id} to={`check/${check.id}`}>
            <li key={check.id} className="list-group-item">
              <p>{check.id} / {tableName}</p> 
            </li>
          </Link>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Open Checks</h3>
              <ul className="check-list">
                {this.filterOpenChecks()}
              </ul>
            </div>
            <div className="col-lg-6">
              <h3>Closed Checks</h3>
              <ul className="check-list">
                {this.filterClosedChecks()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { checks: state.checks };
}

export default connect(mapStateToProps, { fetchChecks })(CheckIndex);