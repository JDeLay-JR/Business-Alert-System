  import React from 'react'
  import { connect } from 'react-redux';
  import { withRouter, NavLink } from 'react-router-dom';

  const ClientList = (props) => {
    const {clients} = props
    return (
      <div>
        <h3>Client List</h3>
          {
            clients.map(client => {
              return (
                  <NavLink key={client.id} to={`clients/${client.id}`}>
                    <div className="clientListElement">
                        <h4>{`${client.firstName} ${client.lastName}`}</h4>
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
