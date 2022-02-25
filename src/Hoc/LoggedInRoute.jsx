import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const LoggedInRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

const mapStateToProps = state => (
    {auth: !state.firebase.auth.isEmpty}
)

export default connect(mapStateToProps)(LoggedInRoute)
