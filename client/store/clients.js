import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS'
const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT'
const DELETE_CLIENT = 'DELETE_CLIENT'
const UPDATE_CLIENT = 'UPDATE_CLIENT'

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

function deleteClient (id) {
  return {
    type: DELETE_CLIENT,
    id
  }
}

function updateClient (updatedClient) {
  return {
    type: UPDATE_CLIENT,
    updatedClient
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
  return function thunk(dispatch) {
    return axios.post('/api/client', clientToAdd)
    .then(res => res.data)
    .then(newClient => {
      const action = addNewClient(newClient)
      return dispatch(action);
    })
  }
}

export function removeClient (id) {
  return function thunk(dispatch) {
    return axios.delete(`/api/client/${id}`)
    .then(res => res.data)
    .then(idToRemove => {
      const action = deleteClient(idToRemove)
      return dispatch(action);
    })
  }
}

export function putClient (client, id) {
  return function thunk(dispatch) {
    return axios.put(`/api/client/${id}`, client)
    .then(res => res.data)
    .then(clientToUpdate => {
      const action = deleteClient(clientToUpdate)
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
    case UPDATE_CLIENT:
      return [...state, action.updatedClient]
    case DELETE_CLIENT:
      return state.filter(client => {
        if (client.id != action.id) {
          return client
        }
      })
    default:
      return state
  }
}
