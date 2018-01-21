import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS'

/**
* ACTION CREATORS
*/
function getAllClients (clients) {
  return {
    type: GET_ALL_CLIENTS,
    clients
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

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_CLIENTS:
      return action.clients
    default:
      return state
  }
}
