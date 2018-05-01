  import React from 'react'
  import { connect } from 'react-redux';
  import { withRouter, NavLink } from 'react-router-dom';
  import {removeClient} from '../store'

  const ClientList = (props) => {
    const {clients, handleDelete} = props
    return (
      <div>
        <h3>Client List</h3>
          {
            clients.map(client => {
              return (
                <div key={client.id}>
                  <NavLink to={`clients/${client.id}`}>
                    <h4>{`${client.firstName} ${client.lastName}`}</h4>
                  </NavLink>
                  <button onClick={() => handleDelete(client.id)}>X</button>
                </div>
              )
            })
          }
      </div>
    )
  }

  //Connection to the Redux Store
  const mapStateToProps = function (state) {
    return {
      clients: state.clients
    }
  }
  const mapDispatchToProps = function (dispatch) {
    return {
      handleDelete(id) {
        dispatch(removeClient(id))
      }
    }
  }

const ClientListContainter = withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientList))
export default ClientListContainter;
