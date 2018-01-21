  import React from 'react'
  import { connect } from 'react-redux';
  import { withRouter, NavLink } from 'react-router-dom';

  const ClientList = (props) => {
    const {clients, sendText} = props
    return (
      <div>
        <b>Client List:</b>
        {
          clients.map(client => {
            return (
              <div key={client.id}>
                <span>
                  <p>{`${client.firstName} ${client.lastName}`}</p>
                  <p>{client.email}</p>
                  <p>{client.phone}</p>
                </span>
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

const ClientListContainter = withRouter(connect(mapStateToProps)(ClientList))
export default ClientListContainter;
