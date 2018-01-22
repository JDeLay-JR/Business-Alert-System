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
              <NavLink to={`clients/${client.id}`} key={client.id}>
                <div>
                    <p>{client.email}</p>
                    <p>{client.phone}</p>
                </div>
              </NavLink>
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
