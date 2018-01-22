  import React from 'react'
  import { connect } from 'react-redux';
  import { withRouter, NavLink } from 'react-router-dom';
  import { Grid, Cell } from "styled-css-grid";

  const ClientList = (props) => {
    const {clients, sendText} = props
    return (
      <div>
        <Grid columns={1}>
          <Cell center><h3>Client List</h3></Cell>
        </Grid>
        <Grid columns={"200px 200px 200px"} justifyContent="space-around">
          {
            clients.map(client => {
              return (
                <Cell center key={client.id}>
                  <NavLink to={`clients/${client.id}`}>
                    <div className="clientListElement">
                        <h4>{`${client.firstName} ${client.lastName}`}</h4>
                    </div>
                  </NavLink>
                </Cell>
              )
            })
          }
        </Grid>
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
