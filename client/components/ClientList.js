  import React from 'react'
  import { connect } from 'react-redux';
  import { withRouter, NavLink } from 'react-router-dom';
  import {removeClient} from '../store'

  const ClientList = (props) => {
    const {clients, handleDelete} = props
    return (
      <div className="clientListContainerGrid">
        <div className="clientListHeader">
          <h2>Client List</h2>
        </div>
        <div className="clientListGrid">
          {
            clients.map(client => {
              return (
                <div key={client.id} className="clientListViewContainer" >
                  <NavLink className="clientListView" key={client.id} to={`clients/${client.id}`}>
                    <h3>{`${client.firstName} ${client.lastName}`}</h3>
                    <img src={client.img} />
                  </NavLink>
                  <button id="clientListButton" onClick={() => handleDelete(client.id)}>Delete Client</button>
                </div>
              )
            })
          }
        </div>
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
