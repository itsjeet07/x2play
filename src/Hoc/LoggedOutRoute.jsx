import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const LoggedOutRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === false
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

const mapStateToProps = state => (
    {auth: !state.firebase.auth.isEmpty}
)

export default connect(mapStateToProps)(LoggedOutRoute)
