import axios from 'axios';

export const FETCH_TABLES = 'FETCH_TABLES';
export const CREATE_CHECK = 'CREATE_CHECK';
export const FETCH_CHECKS = 'FETCH_CHECKS';
export const FETCH_ONE_CHECK = 'FETCH_ONE_CHECK';
export const FETCH_MENU_ITEMS = 'FETCH_MENU_ITEMS';

const ROOT_URL = 'https://check-api.herokuapp.com';
const AUTH_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3M2I1MzJiLWJlZWItNDExYi1hMTg5LWJjZmJlNWVlYzM5MCIsIm5hbWUiOiJqdW5pb3IgIzgifQ.FOOXhSHXPe3oJ0gs_eCJkZK67N5OEEqrG-IMDxBvZ8w';

// test comment for git push
// test comment for git push
// test comment for git push


export function fetchTables() {
  const request = axios({
    url: `${ROOT_URL}/tables`,
    method: 'get',
    headers: { 'Authorization' : AUTH_KEY }
  });

  return {
    type: FETCH_TABLES,
    payload: request
  };
}

export function createCheck(tableId) {
  const request = axios({
    url: `${ROOT_URL}/checks`,
    method: 'post',
    headers: { 
      'Authorization' : AUTH_KEY,
      'Content-Type': 'application/json' 
    },
    data: {
      tableId: tableId
    }
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error.response);
  });

  return {
    type: CREATE_CHECK,
    payload: request
  };
}

export function fetchChecks() {
  const request = axios({
    url: `${ROOT_URL}/checks`,
    method: 'get',
    headers: { 'Authorization' : AUTH_KEY }
  });

  return {
    type: FETCH_CHECKS,
    payload: request
  };
}

export function fetchOneCheck(checkId) {
  const request = axios({
    url: `${ROOT_URL}/checks/${checkId}`,
    method: 'get',
    headers: { 'Authorization' : AUTH_KEY }
  });

  return {
    type: FETCH_ONE_CHECK,
    payload: request
  };
}

export function fetchMenuItems() {
  const request = axios({
    url: `${ROOT_URL}/items`,
    method: 'get',
    headers: { 'Authorization' : AUTH_KEY }
  });

  return {
    type: FETCH_MENU_ITEMS,
    payload: request
  }
}