import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS'
const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT'

/**
* ACTION CREATORS
*/
function getAllClients (clients) {
  return {
    type: GET_ALL_CLIENTS,
    clients
  }
}

function addNewClient (client) {
  return {
    type: ADD_NEW_CLIENT,
    client
  }
}

/**
 * THUNK CREATORS
 */
export function fetchClients () {
  return function thunk(dispatch) {
    return axios.get('/api/client')
    .then(res => res.data)
    .then(clients => {
      const action = getAllClients(clients)
      return dispatch(action);
    })
  }
}

export function postClient (clientToAdd) {
  console.log('Clicked postClient')
  return function thunk(dispatch) {
    return axios.post('/api/client', clientToAdd)
    .then(res => res.data)
    .then(newClient => {
      const action = addNewClient(newClient)
      return dispatch(action);
    })
  }
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_CLIENTS:
      return action.clients
    case ADD_NEW_CLIENT:
      return [...state, action.client]
    default:
      return state
  }
}
